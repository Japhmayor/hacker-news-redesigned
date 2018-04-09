import React from 'react';
import * as styles from './Meta.scss';

export const Score = (props) => (
  <span className={styles.Score}>{props.children}</span>
);

export const Author = (props) => (
  <span className={styles.Author}>{props.children}</span>
);

// TODO: PropTypes
