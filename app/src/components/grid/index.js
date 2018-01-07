import { h, Component } from 'preact';
import styled, { keyframes } from 'styled-components';
import { Desktop, Tablet, Mobile } from '../responsive';
import ScaleLoader from 'halogen/ScaleLoader';
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
const imageText = [
  'PatchBox',
  'Nuvents',
  'Whisker Labs',
  'Haymakers',
  'Amovio',
  'Next-Gen Sequencing',
];

const imageDescriptions = [
  'The first ever subscription box for helping psoriasis',
  'A platform for public and intimate events',
  'Sensor and software technology delivering home intelligence, energy savings, and peace of mind',
  'The great American beverage. Drink differently',
  'Transform Work. Happier employees means increased productivity',
  'Tackling cancers biggest problems with precision oncology',
];

const Appearance = keyframes`
from {
  transform: scale(0);
  opacity:0;
}
to {
  transform: scale(1);
  opacity:1;
}
`;

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
  animation: ${Appearance} 1.5s 1;
`;

const MobileSection = styled.section`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  display: flex;
  align-items: center;
`

export default class Grid extends Component {
  state = {
    loading: true,
    images: [],
  };

  imageLoadingChanged = () => {
    this.setState({
      ...this.state,
      images: [...this.state.images, true],
    });

    this.state.images.length === 6
      ? this.setState({
        ...this.state,
        loading: false,
      })
      : null;
    return false;
  };

  renderSpinner() {
    const { loading, images } = this.state;
    if (!loading) {
      return null;
    } else {
      return (
        <Overlay>
          <ScaleLoader size="50px" margin="0 auto"/>
        </Overlay>
      )
    }
  }

  render() {
    return (
      <div>
        { this.renderSpinner() }
        <GridContainer>
          <Desktop>
            <GridSection>
              {imageSources.map((value, key) => (
                <Box
                  img={value}
                  imageLoading={this.imageLoadingChanged}
                  mobile={false}
                  color={imageOverlayColors[key]}
                  name={imageText[key]}
                  description={imageDescriptions[key]}
                />
              ))}
            </GridSection>
          </Desktop>
          <Tablet>
            <GridSection>
              {imageSources.map((value, key) => (
                <Box
                  img={value}
                  imageLoading={this.imageLoadingChanged}
                  mobile
                  color={imageOverlayColors[key]}
                  name={imageText[key]}
                  description={imageDescriptions[key]}
                />
              ))}
            </GridSection>
          </Tablet>
          <Mobile>
            <MobileSection>
              {imageSources.map((value, key) => (
                <Box
                  img={value}
                  imageLoading={this.imageLoadingChanged}
                  mobile
                  color={imageOverlayColors[key]}
                  name={imageText[key]}
                  description={imageDescriptions[key]}
                />
              ))}
            </MobileSection>
          </Mobile>
        </GridContainer>
    </div>
    );
  }
}
