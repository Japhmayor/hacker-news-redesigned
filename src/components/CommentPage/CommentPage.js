import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Comment from '../Comment/Comment';
import * as styles from './CommentPage.scss';

const CommentPage = ({ parentPostID, parentPostTitle }) => (
  <Fragment>
    <h1 className={styles.CommentPageTitle}>
      <small>Comment thread in:</small>
      <Link to={`/post/${parentPostID}`}>{parentPostTitle}</Link>
    </h1>

    <Comment
      parentPostID={parentPostID}
      parentPostTitle={parentPostTitle}
      level={0}
      showParent
    />
  </Fragment>
);

CommentPage.propTypes = {
  parentPostID: PropTypes.string.isRequired,
  parentPostTitle: PropTypes.string.isRequired,
};

export default CommentPage;

// TODO: PropTypes
