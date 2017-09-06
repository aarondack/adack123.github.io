import styled from 'styled-components';
import { Desktop, Tablet, Mobile } from '../responsive';
import Box from '../box';

import patchboxImage from '../../assets/images/patchbox-items.jpg';
import whiskerLabs from '../../assets/images/pills_dark.jpg';
import nuventsImage from '../../assets/images/NuventsCover.jpg';
import switchelImage from '../../assets/images/switchel.jpg';
import amovioImage from '../../assets/images/amovio.jpg';
import solarPanel from '../../assets/images/solar.jpg';

const imageSources = [
  patchboxImage,
  nuventsImage,
  solarPanel,
  switchelImage,
  amovioImage,
  whiskerLabs,
];

const imageOverlayColors = ['#064c65', '#b92235', '#3d2471', '#d9ac32', '#393431', '#8abe51'];

const GridContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background-color: #fff;
  margin-top: 4.5em;
`;

const GridSection = styled.section`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

const MobileSection = styled.section`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const Grid = () => (
  <GridContainer>
    <Desktop>
      <GridSection>
        {imageSources.map((value, key) => (
          <Box img={value} mobile={false} color={imageOverlayColors[key]} />
        ))}
      </GridSection>
    </Desktop>
    <Tablet>
      <GridSection>{imageSources.map((value, key) => <Box img={value} mobile />)}</GridSection>
    </Tablet>
    <Mobile>
      <MobileSection>{imageSources.map((value, key) => <Box img={value} mobile />)}</MobileSection>
    </Mobile>
  </GridContainer>
);

export default Grid;
