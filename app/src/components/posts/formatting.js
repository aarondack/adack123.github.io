import styled from 'styled-components';

export const BlogPostContainerDesktop = styled.div`
  position: relative;
  width: 960px;
  background: rgb(252, 252, 250);
  margin: 5em auto 4em;
`;

export const BlogPostContainerMobile = styled.div`
  position: relative;
  width: 300px;
  background: rgb(252, 252, 250);
  margin: 5em auto 4em;
`;

export const BlogHeader = styled.h1`
  font-size: 45px;
  letter-spacing: -2px;
  margin: 0.3em 0px 0.1em;
  font-weight: 300;
`;

export const Content = styled.p`line-height: 1.5em;`;

export const SectionTitle = styled.h2`
  text-rendering: optimizeLegibility;
  margin-top: 2em;
  font-size: 1.5em;
`;

export const Brackets = styled.div`
  right: 100%;
  position: absolute;
  padding: 0.15em 0.3em;
  color: #cccccc;
  font-size: 20px;
`;

export const PreCode = styled.pre`
  padding-left: 18px;
  border-left: 2px solid rgb(204, 204, 204);
  margin: 2em 0px 2em -20px;
  display: grid;
`;
