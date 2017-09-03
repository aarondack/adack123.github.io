import styled from 'styled-components';
import Box from '../box';

const GridContainer = styled.div`
  max-width: 1600px;
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
      <Box />
      <Box />
      <Box />
    </GridSection>
  </GridContainer>
);

export default Grid;
