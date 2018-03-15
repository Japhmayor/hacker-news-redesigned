import React, { Component, Fragment } from 'react';
import Header from './components/Header/';
import Main from './components/Main';
import EntryList from './components/EntryList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Main>
          {/*<EntryList/>*/}
        </Main>
      </Fragment>
    );
  }
}

export default App;
