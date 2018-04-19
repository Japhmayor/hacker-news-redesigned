import React from 'react';
import * as styles from './NotFound.scss';

const NotFound = (props) => (
  <div className={styles.NotFound}>
    <h1  className={styles.NotFoundTitle}>404</h1>
    <p>{props.text}</p>
  </div>
);

export default NotFound;
