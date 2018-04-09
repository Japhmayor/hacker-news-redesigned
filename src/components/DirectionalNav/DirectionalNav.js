import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as styles from './DirectionalNav.scss';

const DirectionalNav = ({ shown, prevLinkShown, nextLinkShown, prevUrl, nextUrl }) => {
  if (!shown) {
    return null;
  }

  const prevClass = classNames(styles.DirectionaLink, styles.prev);
  const nextClass = classNames(styles.DirectionaLink, styles.next);

  return (
    <nav className={styles.DirectionalNav}>
      {prevLinkShown &&
        <Link
          className={prevClass}
          to={prevUrl}>
          Previous
        </Link>
      }

      {nextLinkShown &&
        <Link
          className={nextClass}
          to={nextUrl}>
          Next
        </Link>
      }
    </nav>
  );
};

export default DirectionalNav;

// TODO: PropTypes
