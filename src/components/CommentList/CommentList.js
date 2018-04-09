import React from 'react';
import Comment from '../Comment/Comment';
import CommentsTitle from './CommentTitle';

const CommentList = ({ comments, commentCount }) => (
  <div>
    <CommentsTitle>{commentCount} Comments</CommentsTitle>

    {comments.map((comment) =>
      <Comment key={comment.id} {...comment} />)
    }
  </div>
);

export default CommentList;

// TODO: Sorting dropdown (Top/Recent). See the sketch file
// TODO: Need an empty state for when there's no comments. "No one commented yet"
// TODO: PropTypes
