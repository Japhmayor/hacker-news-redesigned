import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import './styles/main.scss';
import { renderRoutes } from 'react-router-config';
import ScrollToTop from './components/HelperComponents/ScrollToTop';
import Header from './components/Header/';
import Main from './components/Main/';
import routes from './routes';

const App = () => (
  <Fragment>
    <Header />
    <Main role="main">
      {renderRoutes(routes)}
    </Main>
    <ScrollToTop />
  </Fragment>
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

