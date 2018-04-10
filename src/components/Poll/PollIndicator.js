import React from 'react';
import * as styles from './Poll.scss';

const PollIndicator = (props) => (
  <div className={styles.PollIndicator}>
    <div style={{ width: `${props.percentage}%` }} />
  </div>
);

export default PollIndicator;

// TODO: PropTypes
