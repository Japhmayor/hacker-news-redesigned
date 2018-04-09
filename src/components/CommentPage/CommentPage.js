import React, { Fragment } from 'react';
import Comment from '../Comment/Comment';
import * as styles from './CommentPage.scss';

const CommentPage = (props) => (
  <Fragment>
    <h1 className={styles.CommentPageTitle}> {/* TODO: Should be a link to the post.*/}
      <small>Comment thread in:</small>
      {props.parentPostTitle}
    </h1>

    <Comment {...props} />
  </Fragment>
);

export default CommentPage;

// TODO: PropTypes
