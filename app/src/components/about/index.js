import { h, Component } from 'preact';
import styled from 'styled-components';
import { Desktop, Tablet, Mobile } from '../responsive';

const AboutContainerDesktop = styled.div`
  margin: 0px auto;
  margin-top: 5em;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Mail = styled.a`
  color: black;
  text-decoration: underline;
`;

const WaveDesktop = styled.h1`font-size: 85px;`;

const NameDesktop = styled.h4`font-size: 30px;`;

const CoffeeDescription = styled.h4`font-size: 20px;`;

const Paragraph = styled.p``;

const TriangleDesktop = styled.div`
  width: 0;
  height: 0;
  border-left: 250px solid transparent;
  border-right: 500px solid transparent;
  border-bottom: 250px solid black;
  position: fixed;
  bottom: 0;
`;

class About extends Component {
  renderContent = () => (
    <div>
      <WaveDesktop>👋🏻</WaveDesktop>
      <NameDesktop>I'm Aaron.</NameDesktop>
      <CoffeeDescription>
        Front-end engineer based out of New York City 🏙 and a coffee lover ☕️
      </CoffeeDescription>
      <p className="text-about">
        I spend the majority of my time working and exploring new technologies. Currently loving the
        react ecosystem. I've done various types of contract work in the past, if you want to work
        with me drop me a{' '}
        <strong>
          <Mail href="mailto:adackbusiness@gmail.com?subject=Let's chat" className="line">
            line.
          </Mail>
        </strong>
      </p>
    </div>
  );

  render() {
    return (
      <div>
        <Desktop>
          <AboutContainerDesktop>{this.renderContent()}</AboutContainerDesktop>
          <TriangleDesktop />
        </Desktop>
        <Tablet>
          <AboutContainerDesktop>{this.renderContent()}</AboutContainerDesktop>
        </Tablet>
        <Mobile>
          <AboutContainerDesktop>{this.renderContent()}</AboutContainerDesktop>
        </Mobile>
      </div>
    );
  }
}

export default About;
