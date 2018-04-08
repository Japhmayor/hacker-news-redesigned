import React from 'react';
import PropTypes from 'prop-types';
import { main } from  './Main.scss';

const Main = (props) => (
  <main className={main} role="main">
    {props.children}
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
