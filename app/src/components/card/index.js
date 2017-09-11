import { h, Component } from 'preact';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  cursor: pointer;
  margin-bottom: 2em;
  &:hover {
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.16);
    transform: translate(0, -20px);
    transition-delay: 0s;
  }
`;

const CardTitleDesktop = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  margin-left: 1em;
  border-right: 1px solid #e9ebee;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardDescription = styled.div`
  margin-left: 1em;
  display: flex;
`;

const CardTitleHeader = styled.h4`color: black;`;

const Description = styled.h4`
  font-family: ColfaxMedium;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
  padding-right: 1em;
  color: black;
`;

class Card extends Component {
  render() {
    const { img, title, description } = this.props;
    return (
      <CardContainer>
        <img src={img} width={960} height={120} />
        <CardBottom>
          <CardTitleDesktop>
            <CardTitleHeader>{title}</CardTitleHeader>
          </CardTitleDesktop>
          <CardDescription>
            {description.map((value, index) => <Description key={index}>{value}</Description>)}
          </CardDescription>
        </CardBottom>
      </CardContainer>
    );
  }
}

export default Card;
