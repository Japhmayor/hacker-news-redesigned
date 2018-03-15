import React from 'react';
import logo from '../../images/hn-logo.svg'
import Nav from './Nav'
import NavLink from './NavLink';
import Logo from './Logo';
import HeaderWrap from './HeaderWrap';

const Header = (props) => {
  return (
    <HeaderWrap>
      <Logo href="" title="Back to Homepage (Top News)">
        <img src={logo} alt="Hacker News" />
      </Logo>
      
      <Nav>
        <NavLink className="is-active" href="">Top</NavLink>
        <NavLink href="">New</NavLink>
        <NavLink href="">Show</NavLink>
        <NavLink href="">Ask</NavLink>
        <NavLink href="">Jobs</NavLink>
      </Nav>
    </HeaderWrap>
  );
};

export default Header;
