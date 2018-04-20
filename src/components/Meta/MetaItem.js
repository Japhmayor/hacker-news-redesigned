import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Meta.scss';

export const Score = (props) => (
  <span className={styles.Score}>{props.children}</span>
);

export const Author = (props) => (
  <span className={styles.Author}>{props.children}</span>
);

const propTypes = {
  children: PropTypes.node,
};

Score.propTypes = propTypes;
Author.propTypes = propTypes;
