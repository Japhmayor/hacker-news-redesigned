import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as styles from './UserLink.scss';

const UserLink = ({ inComment, text, to }) => {
  const className = classNames(
    [styles.UserLink],
    { [styles.onComment]: inComment },
  );

  return (
    <Link
      className={className}
      to={to}
      aria-label={`Written by ${text}`}
    >
      {text}
    </Link>
  );
};

UserLink.propTypes = {
  inComment: PropTypes.bool,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


export default UserLink;
