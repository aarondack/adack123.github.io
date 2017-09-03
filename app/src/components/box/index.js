import styled from 'styled-components';
import image from '../../assets/images/patchbox_box.png.jpg';

const BoxWrapping = styled.div`
  width: 33.3%;
  float: left;
`;

const Box = ({ img, route }) => (
  <BoxWrapping>
    <img src={image} />
  </BoxWrapping>
);

export default Box;
