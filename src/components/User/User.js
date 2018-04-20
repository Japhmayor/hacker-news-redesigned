import React from 'react';
import { getDate } from '../../utils/utils.time';
import * as styles from './User.scss';

const User = ({ username, karma, createdAt, about }) =>
  (
    <div className={styles.User}>
      <header className={styles.UserHeader}>
        <h2>{username}</h2>
        <span className={styles.UserScore} title="Karma">{karma}</span>
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

export default User;

// TODO: Proptypes
// TODO: Add Post/Comment tabs to the page (figure out filtering from a single array of IDs)
