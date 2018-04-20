import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as styles from './UserLink.scss';

const UserLink = ({ comment, text, to }) => {
  const className = classNames(
    [styles.UserLink],
    { [styles.onComment]: comment },
  );

  return (
    <Link
      className={className}
      to={to}
    >
      {text}
    </Link>
  );
};

UserLink.propTypes = {
  comment: PropTypes.bool,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


export default UserLink;

// TODO PropTypes
