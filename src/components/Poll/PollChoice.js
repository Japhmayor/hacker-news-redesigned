import React from 'react';
import PropTypes from 'prop-types';
import PollIndicator from './PollIndicator';
import * as styles from './Poll.scss';

const PollChoice = ({ text, voteCount, percentage }) => (
  <div className={styles.PollChoice}>
    <div className={styles.PollChoiceText}>
      {text}
    </div>

    <div className={styles.PollChoiceCount}>
      {voteCount}
    </div>

    <PollIndicator percentage={percentage} />
  </div>
);

PollChoice.propTypes = {
  text: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default PollChoice;

// TODO: Sort descending
