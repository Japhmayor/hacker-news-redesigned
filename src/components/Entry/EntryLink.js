import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from './Entry.scss';

const EntryLink = ({ href, title, external }) => (
  external ? (
    <a className={styles.EntryLink} href={href}>{title}</a>
  ) : (
    <Link className={styles.EntryLink} to={href}>{title}</Link>
  )
);

EntryLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

export default EntryLink;
