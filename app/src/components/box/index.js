import styled from 'styled-components';

const BoxWrapping = styled.div`
  width: 33.3%;
  float: left;
`;

const PortfolioImage = styled.img`
  width: 100%;
`

const Box = ({ img, route }) => (
  <BoxWrapping>
    <PortfolioImage src={img} />
  </BoxWrapping>
);

export default Box;
