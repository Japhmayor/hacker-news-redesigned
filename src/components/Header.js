import React from 'react';
import logo from '../images/hn-logo.svg'

const Header = (props) => {
  return (
    <header className="header">
      <nav className="nav">
        <a className="header__logo" href="" title="Back to Homepage (Top News)">
          <img src={logo} alt="Hacker News" />
        </a>
        <a className="nav-link" href="">New</a>
        <a className="nav-link" href="">Show</a>
        <a className="nav-link" href="">Ask</a>
        <a className="nav-link" href="">Jobs</a>
      </nav>
    </header>
  );
};

export default Header;
