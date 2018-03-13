import React, { Component, Fragment } from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__logo">HN</h1>
    </header>
  );
};


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
      </Fragment>
    );
  }
}

export default App;
