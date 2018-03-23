import React from 'react';
import logo from '../../images/hn-logo.svg'
import Nav from './Nav'
import NavLink from './NavLink';
import Logo from './Logo';
import HeaderWrap from './HeaderWrap';

const Header = (props) => {
  return (
    <HeaderWrap>
      <Logo>
        <img src={logo} alt="Hacker News" />
      </Logo>
      
      <Nav>
        <NavLink activeClassName="is-active" to="/" exact>Top</NavLink>
        <NavLink activeClassName="is-active" to="/new">New</NavLink>
        <NavLink activeClassName="is-active" to="/show">Show</NavLink>
        <NavLink activeClassName="is-active" to="/ask">Ask</NavLink>
        <NavLink activeClassName="is-active" to="/jobs">Jobs</NavLink>
      </Nav>
    </HeaderWrap>
  );
};

export default Header;
