import React from 'react';
import PropTypes from 'prop-types';
import UserLink from '../UserLink/UserLink';
import * as styles from './Meta.scss';

export const Score = ({ score }) => (
  <span
    className={styles.Score}
    aria-label={`Score: ${score} points`}
  >
    <span aria-hidden="true">+ {score}</span>
  </span>
);

export const Author = ({ name, inComment }) => (
  <span className={styles.Author}>
    {!inComment &&
      <span aria-hidden="true">by </span>
    }
    <UserLink to={`/user/${name}`} text={name} inComment={inComment} />
  </span>
);

Author.propTypes = {
  name: PropTypes.string.isRequired,
  inComment: PropTypes.bool,
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};
