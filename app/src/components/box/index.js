import styled from 'styled-components';
import { Desktop, Mobile } from '../responsive';

const BoxWrapping = styled.div`
  width: ${props => (props.mobile === true ? '100%' : '33.3%')};
  float: left;
  display: flex;
  position: relative;
  overflow: hidden;

  &:hover img {
    transform: scale(1.2);
  }
`;

const PortfolioImage = styled.img`
  width: 101%;
  height: 100%;
  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`;

const BoxOverlay = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    opacity: 1;
  }
`;

const BoxOverlayContainer = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.95;
  background-color: ${props => props.color || 'blue'};
  position: absolute;
`;

const Box = ({ img, route, color, mobile }) => (
  <BoxWrapping mobile={mobile}>
    <PortfolioImage src={img} />
    <BoxOverlay>
      <BoxOverlayContainer color={color} />
    </BoxOverlay>
  </BoxWrapping>
);

export default Box;
