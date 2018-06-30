import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import './styles/main.scss';
import { renderRoutes } from 'react-router-config';
import ScrollToTop from './components/HelperComponents/ScrollToTop';
import Analytics from './components/HelperComponents/Analytics';
import Header from './components/Header/';
import Main from './components/Main/';
import routes from './routes';
import Head from './components/Head';

const App = () => (
  <Fragment>
    <Head />
    <Header />
    <Main>
      {renderRoutes(routes)}
    </Main>
    <ScrollToTop />
    <Analytics />
  </Fragment>
);

export default hot(module)(App);
