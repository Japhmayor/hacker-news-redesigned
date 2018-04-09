import React from 'react';
import Comment from '../Comment/Comment';
import * as styles from './CommentList.scss';

const CommentList = ({ comments, commentCount }) => (
  <div>
    <h2 className={styles.CommentsTitle}>{commentCount} Comments</h2>

    {comments.map((comment) =>
      <Comment key={comment.id} {...comment} />)
    }
  </div>
);

export default CommentList;

// TODO: Sorting dropdown (Top/Recent). See the sketch file
// TODO: PropTypes
