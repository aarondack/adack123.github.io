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
import apiImage from '../../assets/blog/api_example.png';
import apiService from '../../assets/blog/api-service.png';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';

class ReduxSaga extends Component {
  renderContent = () => (
    <div>
      <BlogHeader> Graceful Redux Asynchronicity </BlogHeader>
      <Content>
        This blog post will focus on asynchronous libraries specifically centered around redux.
        Redux is a predictable state container for JavaScript applications, allowing you to write
        consistent, predictable applications. Enough on that though, if you are interested in the
        workings of redux, I strongly suggest to visit their docs{' '}
        <a href="http://redux.js.org/">here</a>.
      </Content>
      <Content>
        There are two main libraries right now that handles asynchronous processes for redux. The
        first is redux-thunk, and the second is redux-saga. The main difference between thunk and
        saga is that thunk utilizes promises while saga utilizes generator functions. Here at MSK we
        are big advocates for redux-saga. One of the main reasons we love sagas is that it allows us
        the ability to write code that looks synchronous but behaves asynchronously. This is
        especially powerful for keeping a grasp of where you are in your app and the logic that is
        driving your data fetching and processing. Besides that, the differences are quite small
        between the two libraries, depending on whether you like to work with generators or
        promises, and of course different API vernacular.
      </Content>
      <SectionTitle>
        <Brackets>#</Brackets>
        Working with API Requests - A Map Approach
      </SectionTitle>
      <Content>
        There are a multitude of different ways to structure how you actually call an API, this is
        just one technique that we are implementing, and in no means exhaustive. We are going to
        construct our API map. First we are going to compose our header settings into an object that
        we are calling <code> API_REQUEST_SETTINGS</code>
      </Content>
      <img src={apiImage} width="960" />
      <Content>
        Here, we construct the apiRequestMap using some dummy endpoints. As you can see the
        apiRequestMap is contained within an object. We place each different endpoint and its
        associated HTTP actions as key-value pairs within the object. Next, we proceed to building
        what we like to call the service, which in essence a plain function that takes the key-pair
        selected and fetches it.
      </Content>
      <Content>For example...</Content>
      <img src={apiService} width="960" />
      <Content>
        We select on the apiRequestMap with its given type, and pass in associated data in this
        line.
      </Content>
        <SyntaxHighlighter language='javascript' style={okaidia}> 
          const apiRequestConfiguration = apiRequestMap[type](data);
        </SyntaxHighlighter>
      <Content>
        From there, we now have the given key and passed in its accompanying data, so we just return
        a fetch for that endpoint, combining the settings from the value in the apiRequestMap with
        the given API<em>REQUEST</em>SETTINGS that we declared above.
      </Content>
      <SyntaxHighlighter language='javascript' style={okaidia}> 
          {`return fetch(apiRequestConfiguration.url, { 
            ...apiRequestConfiguration.settings,
            ...API_REQUEST_SETTINGS, })`}
        </SyntaxHighlighter>
      <Content>Which returns a promise that we handle gracefully here...</Content>
      <SyntaxHighlighter language='javascript' style={okaidia}> 
          {`
      .then(res =>; {
        if (res.status > 400) {
          return res.json().then(err =>; {
            throw err;
          });
        }
        return res.json();
      });
    `}
          }
     </SyntaxHighlighter>
      <Content>
        And that's it. From here on out we can just plug whatever endpoint we want into our
        apiRequestMap and then just key on it to return our settings. But... where does redux-saga
        come in? How would we call this dummyWebService?
      </Content>
      <SectionTitle>
        <Brackets>#</Brackets>
        Using Redux-Saga
      </SectionTitle>
      <Content>
        This section requires some nascent understanding of how generators work, but altogether will
        not be difficult to understand if you understand the methodologies underlying them.
      </Content>
      <Content>Here's what we like to call a watcher in redux-saga.</Content>
      <SyntaxHighlighter language='javascript' style={okaidia}> 
          {
`export function* watchFetchSomeFooData() {
  while (true) {
    const { someFooThing } = yield take(actions.REQUEST_SOME_ACTION);
    yield call(fetchTheFooData, someFooThing);
  }
}
        `}
        </SyntaxHighlighter>
      <Content>
        For each type of action that you are listening for, there should be a separate watcher
        function that listens for it. This is an infinite loop that is always running in the
        background waiting for an action to be dispatched. When an action is dispatched the
        generator yields on the action that gets dispatched to the store (That should be familiar
        because its redux specific). Here we are destructuring our returned object on someFooThing
        which could potentially have some useful information (userIds, page number to paginate API
        with, etc). Next, we call our next generator function fetchTheFooData with the accompanying
        object.
      </Content>
      <Content>
        If you are curious as to what the actual yield return on an action take, you could....
      </Content>
      <SyntaxHighlighter language='javascript' style={okaidia}> 
        {`
const fooThing = yield take(actions.REQUEST_SOME_ACTION);
console.log(fooThing)

// It ends up containing a lot of content related to the actual redux request, 
// so usually its best to destructure on the key you want from the object.       

export function* fetchTheFooData(someFooThing) {
const data = yield call(dummyWebService, 'postData', { someFooThing });
yield put(actions.RECEIVE_SOME_FOO_DATA(data));
        `}
        </SyntaxHighlighter>
      <Content>
        Here is where we actually fetch the data. We call the dummyWebService that we created above
        with two parameters, the key for the API endpoint that we are trying to access, and
        optionally some data that we will pass in. In this case we are calling the dummyWebService
        with the postData string and an object containing someFooThing data. This will enter into
        the dummyWebService function and immediately get used in the first line here...
      </Content>
      <SyntaxHighlighter language='javascript' style={okaidia}>
          {
            `const apiRequestConfiguration = apiRequestMap[type](data)
// AKA...
const apiRequestConfiguration = apiRequestMap['postData']({ someFooThing });
            `}
        </SyntaxHighlighter>
      <Content>This one-liner,</Content>
      <SyntaxHighlighter language='javascript' style={okaidia}>
        {"const data = yield call(dummyWebService, 'postData', { someFooThing });"}
      </SyntaxHighlighter>
      <Content>
        is all we have to wait on for our entire API response. We yield on it and smartly name our
        variable data, which is the return of the API response. From their we can let our redux
        store know that we have the data by dispatching some action named{' '}
        <code>RECEIEVE_SOME_FOO_DATA</code> with the accompanying data. The 'put' method that
        redux-saga exposes to us from their API is essentially just a way for us to dispatch an
        action to our redux store.
      </Content>
      <Content>
        Last, all we have to do is hook this saga up to our rootSaga and it will permanently listen
        for any actions with a given type that is kicked off. It will then proceed to fetch the
        data, and return it to your redux store.
      </Content>
      <SyntaxHighlighter language='javascript' style={okaidia}>
      {
`export default function* rootSaga() {
  yield [
    fork(watchFetchSomeFooData),
  ];
         `
      }
      </SyntaxHighlighter>
      <Content>The reason we are using fork here is ... according to their docs ...</Content>
      <blockquote>
        fork, like call, can be used to invoke both normal and Generator functions. But, the calls
        are non-blocking, the middleware doesn't suspend the Generator while waiting for the result
        of fn. Instead as soon as fn is invoked, the Generator resumes immediately.
      </blockquote>
      <SectionTitle>Conclusion</SectionTitle>
      <Content>
        In the end, handling asynchronicity and concurrent computations is oftentimes painful and
        difficult in applications. As the larger an application grows the need for a base to handle
        all API requests as well as a way to gracefully consume the responses becomes apparent.
        Luckily, redux-saga exposes a way for our applications to handle these challenges and does
        so in a way allowing us to write synchronous looking code.
      </Content>
    </div>
  );

  render() {
    return (
      <div>
        <Desktop>
          <BlogPostContainerDesktop>{this.renderContent()}</BlogPostContainerDesktop>
        </Desktop>
        <Mobile>
          <BlogPostContainerMobile>{this.renderContent()}</BlogPostContainerMobile>
        </Mobile>
      </div>
    );
  }
}

export default ReduxSaga;
