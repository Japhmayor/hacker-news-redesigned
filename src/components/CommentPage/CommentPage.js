import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import * as styles from './CommentPage.scss';

const CommentPage = (props) => (
  <Fragment>
    <h1 className={styles.CommentPageTitle}>
      <small>Comment thread in:</small>
      <Link to={`/post/${props.parentPostID}`}>{props.parentPostTitle}</Link>
    </h1>

    <Comment {...props} level={0} showParent/>
  </Fragment>
);

export default CommentPage;

// TODO: PropTypes
