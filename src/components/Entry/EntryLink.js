import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Entry.scss';

const EntryLink = ({ href, title, external }) => (
  external ? (
    <a className={styles.EntryLink} href={href}>{title}</a>
  ) : (
    <Link className={styles.EntryLink} to={href}>{title}</Link>
  )
);

export default EntryLink;

// TODO: Proptypes
