import styled from 'styled-components';
import { Desktop, Mobile } from '../responsive';

const BoxWrapping = styled.div`
  width: ${props => (props.mobile === true ? '100%' : '33.3%')};
  float: left;
  display: flex;
  position: relative;
  overflow: hidden;
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

const BoxOverlayInside = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  margin: auto;
  width: 20em;
  height: 10em;
  transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: scale(0.8);
`;

const BoxOverlayText = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  &:after {
    display: block;
    height: 0;
    width: 65%;
    border-bottom: 3px solid;
    content: '';
    margin: 1.5em auto auto auto;
  }
`;

const BoxOverlayParagraph = styled.p`
  font-size: 1.2rem;
  color: white;
  font-family: ColfaxMedium;
  text-align: center;
`;

const Box = ({ img, route, color, mobile, name, description }) => (
  <BoxWrapping mobile={mobile}>
    <PortfolioImage src={img} />
    <BoxOverlay>
      <BoxOverlayContainer color={color} />
      <BoxOverlayInside>
        <BoxOverlayText>{name}</BoxOverlayText>
        <BoxOverlayParagraph>{description}</BoxOverlayParagraph>
      </BoxOverlayInside>
    </BoxOverlay>
  </BoxWrapping>
);

export default Box;
