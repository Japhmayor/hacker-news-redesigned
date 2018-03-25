import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/';
import Main from './components/Main';
import EntryListContainer from './containers/EntryListContainer';
import ScrollToTop from './components/ScrollToTop';
import PostContainer from './containers/PostContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Main role="main">
            <Switch>
              <Route path="/:feed(top|new|ask|show|jobs|best)?/:page([1-9][0-9]?)?" component={EntryListContainer} exact/>
              <Route path="/post/:id" component={PostContainer} />
              <Route  render={() => <div>404 muthafucka</div>} />
            </Switch>
          </Main>
  
          <ScrollToTop/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
