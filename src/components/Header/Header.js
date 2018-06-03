import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/hn-logo.svg';
import * as styles from './Header.scss';

const Header = (props) => (
  <Fragment>
    <div className={styles.SkipToContent}>
      <a className=" u-sr-only u-sr-only-focusable" href="#main">
        Skip to main content
      </a>
    </div>

    <header className={styles.Header} role="banner">
      <div className={styles.Logo}>
        <img src={logo} alt="Hacker News" />
      </div>

      <nav className={styles.Nav}>
        <NavLink className={styles.NavLink} activeClassName={styles.isActive} to="/" exact>Top</NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.isActive} to="/new">New</NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.isActive} to="/show">Show</NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.isActive} to="/ask">Ask</NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.isActive} to="/jobs">Jobs</NavLink>
      </nav>
    </header>
  </Fragment>
);

export default Header;
