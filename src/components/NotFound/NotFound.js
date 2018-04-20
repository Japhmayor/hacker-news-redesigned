import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './NotFound.scss';

const NotFound = (props) => (
  <div className={styles.NotFound}>
    <h1  className={styles.NotFoundTitle}>404</h1>
    <p>{props.text}</p>
  </div>
);

NotFound.defaultProps = {
  text: 'The page doesn\'t exist',
};

NotFound.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NotFound;
