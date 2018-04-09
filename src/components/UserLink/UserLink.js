import React from 'react';
import { Link } from 'react-router-dom';

const UserLink = (props) => {
  const styles = props.comment ?
    {
      textDecoration: 'none',
      color: '#2675a7',
      fontWeight: 500,
    }
    : null;

  return (
    <Link
      style={styles}
      to={props.to}
    >
      {props.text}
    </Link>
  );
};

export default UserLink;

// TODO PropTypes
