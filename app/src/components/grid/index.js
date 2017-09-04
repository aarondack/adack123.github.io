import styled from 'styled-components';
import Box from '../box';

import patchboxImage from '../../assets/images/patchbox-items.jpg';
import haymakersImage from '../../assets/images/Haymakers_Logo.png';
import nuventsImage from '../../assets/images/NuventsCover.jpg';


const GridContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background-color: #fff;
  margin-top: 3.5em;
`;

const GridSection = styled.section`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = () => (
  <GridContainer>
    <GridSection>
      <Box img={patchboxImage} />
      <Box img={nuventsImage} />      
      <Box img={haymakersImage} />
    </GridSection>
  </GridContainer>
);

export default Grid;
