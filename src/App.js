import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './styles/main.scss';
import Header from './components/Header/';
import ScrollToTop from './components/ScrollToTop';
import Main from './components/Main/';
import FeedContainer from './containers/FeedContainer';
import PostContainer from './containers/PostContainer';
import CommentPageContainer from './containers/CommentPageContainer';
import UserPageContainer from './containers/UserPageContainer';
import Error from './components/Error/Error';

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <Main role="main">
        <Switch>
          <Route path="/:feedName(top|new|ask|show|jobs|best)?/:page([1-9][0-9]?)?" component={FeedContainer} exact />
          <Route path="/post/:id(\d+)" component={PostContainer} />
          <Route path="/comment/:id(\d+)" component={CommentPageContainer} />
          <Route path="/user/:username" component={UserPageContainer} />
          <Route render={() => <Error type="notfound" />} />
        </Switch>
      </Main>
      <ScrollToTop />
    </Fragment>
  </Router>
);

export default hot(module)(App);


// TODO: Need a way to notify screen readers about navigating between pages.
// TODO: Overall, should provide near-perfect accessibility.
// Research Aria Live regions and implement accordingly. Might need Redux or Context
// http://almerosteyn.com/2017/09/aria-live-regions-in-react
// http://almerosteyn.com/2017/03/accessible-react-navigation
// https://simplyaccessible.com/article/react-a11y/

// TODO: Title and other <head> stuff

// TODO: Caching should be handled throughout the app, all requests are network-only atm.

