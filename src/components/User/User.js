import React from 'react';
import PropTypes from 'prop-types';
import { getDate } from '../../utils/utils.time';
import Head from '../Head';
import * as styles from './User.scss';

const User = ({ username, karma, createdAt, about }) => (
  <div className={styles.User}>
    <Head
      url={`/user/${username}`}
      title={`User: ${username}`}
    />

    <header className={styles.UserHeader}>
      <h2>{username}</h2>
      <span className={styles.UserKarma} title="Karma">{karma}</span>
      <div className={styles.UserDate}>
        On HN since {getDate(createdAt)}
      </div>
    </header>

    {about &&
    <div
      className="text"
      dangerouslySetInnerHTML={{ __html: about }}
    />
    }
  </div>
);

User.propTypes = {
  username: PropTypes.string.isRequired,
  karma: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  about: PropTypes.string,
};

export default User;
