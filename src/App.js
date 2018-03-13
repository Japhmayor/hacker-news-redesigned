import React, { Component, Fragment } from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__logo">HN</h1>
      
      <nav className="nav">
        <a className="nav-link is-active" href="">Top</a>
        <a className="nav-link" href="">New</a>
        <a className="nav-link" href="">Show</a>
        <a className="nav-link" href="">Ask</a>
        <a className="nav-link" href="">Jobs</a>
      </nav>
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
