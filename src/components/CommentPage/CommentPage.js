import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Head from '../Head';
import * as styles from './CommentPage.scss';

const CommentPage = (props) => (
  <Fragment>
    <Head
      url={`/comment/${props.id}`}
      title={props.parentPostTitle}
    />

    <h1 className={styles.CommentPageTitle}>
      <small>Comment thread in:</small>
      <Link to={`/post/${props.parentPostID}`}>{props.parentPostTitle}</Link>
    </h1>

    <Comment
      {...props}
      level={0}
      showParent
    />
  </Fragment>
);

CommentPage.propTypes = {
  id: PropTypes.string.isRequired,
  parentPostID: PropTypes.string.isRequired,
  parentPostTitle: PropTypes.string.isRequired,
};

export default CommentPage;
