import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import * as styles from './UserLink.scss';

const UserLink = (props) => {
  const className = classNames(
    [styles.UserLink],
    { [styles.onComment]: props.comment }
  );

  return (
    <Link
      className={className}
      to={props.to}
    >
      {props.text}
    </Link>
  );
};

export default UserLink;

// TODO PropTypes
