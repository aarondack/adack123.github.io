import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';
import Card from '../card';
import writingsRedux from '../../assets/blog/writings_redux.png';
import greekBlog from '../../assets/blog/greek_blog.png';
import davinci from '../../assets/blog/da_vinci.png';
import algae from '../../assets/blog/algae.png';

const BlogContainer = styled.div`
  margin: 0px auto;
  margin-top: 5em;
  max-width: 960px;
  display: flex;
  flex-direction: column;
`;

class Blog extends Component {
  render() {
    return (
      <BlogContainer>
        <Link href="/writings/redux-asynchronicity">
          <Card
            img={writingsRedux}
            title={'Graceful Redux Asynchronicity'}
            description={['Development', 'Redux']}
          />
        </Link>
        <Link href="/writings/greek">
          <Card
            img={greekBlog}
            title={'Adventures In Greek'}
            description={['Language', 'Etymology']}
          />
        </Link>
        <Link href="/writings/the-lost-leonardo">
          <Card
            img={davinci}
            title={'The Lost Leonardo'}
            description={['History', 'Mystery', 'Art']}
          />
        </Link>
        <Link href="https://baylor-ir.tdl.org/baylor-ir/bitstream/handle/2104/8942/aaron_Dack.pdf?sequence=4">
          <Card
            img={algae}
            title={
              'Determination of planktonic metabolism and trophic status in Texas shallow ponds'
            }
            description={['Wetland Ecology', 'Honors Thesis']}
          />
        </Link>
      </BlogContainer>
    );
  }
}

export default Blog;
