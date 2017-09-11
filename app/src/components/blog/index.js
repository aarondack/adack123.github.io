import { h, Component } from 'preact';
import styled from 'styled-components';

const BlogContainer = styled.div`
  margin: 0px auto;
  margin-top: 5em;
  max-width: 960px;
  display: flex;
  flex-container: column;
`;

class Blog extends Component {
  render() {
    return <BlogContainer>Hello</BlogContainer>;
  }
}

export default Blog;
