import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Poll.scss';

const PollIndicator = (props) => (
  <div className={styles.PollIndicator}>
    <div style={{ width: `${props.percentage}%` }} />
  </div>
);

PollIndicator.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default PollIndicator;
