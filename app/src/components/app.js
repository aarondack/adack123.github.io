import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Portfolio from '../routes/portfolio';
import Writings from '../routes/writings';
import Greek from './posts/greek';
import ReduxSaga from './posts/redux-saga';
import Davinci from './posts/davinci';
import About from './about';

export default class App extends Component {
  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Portfolio path="/" />
          <Writings path="/writings" />
          <Greek path="/writings/greek" />
          <ReduxSaga path="/writings/redux-asynchronicity" />
          <Davinci path="/writings/the-lost-leonardo" />
          <About path="/about" />
        </Router>
      </div>
    );
  }
}
