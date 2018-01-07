import { h, Component } from 'preact';
import {
  BlogPostContainerDesktop,
  BlogPostContainerMobile,
  BlogHeader,
  Content,
  SectionTitle,
  Brackets,
  PreCode,
} from './formatting';
import { Desktop, Mobile } from '../responsive';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { docco } from 'react-syntax-highlighter/styles/prism';

import apiImage from '../../assets/blog/api_example.png';
import apiService from '../../assets/blog/api-service.png';

const Test = () => (
  <SyntaxHighlighter language="javascript" style={docco}>
    {'var a = "wat";'}
  </SyntaxHighlighter>
);
export default Test;
