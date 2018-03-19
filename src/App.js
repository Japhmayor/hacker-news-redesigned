import React, { Component, Fragment } from 'react';
import Header from './components/Header/';
import Main from './components/Main';
import EntryList from './components/EntryList/';
import Post from './components/Post/Post';

import postMock from './postMock';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main>
          {/*<EntryList/>*/}
          <Post {...postMock} />
        </Main>
      </Fragment>
    );
  }
}

export default App;
