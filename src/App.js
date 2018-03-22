import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/';
import Main from './components/Main';
import EntryList from './components/EntryList/';
import EntryListContainer from './containers/EntryListContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Main>
            <Route path="/" component={EntryListContainer} exact/>
            <Route path="/:feed(top|new|ask|show|jobs|best)/:page([1-9][0-9]?)?" component={EntryListContainer} exact/>
            {/*<EntryListContainer feedType="new" page="1"/>*/}
          </Main>
        </Fragment>
      </Router>
    );
  }
}

export default App;
