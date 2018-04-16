import React from 'react';
import Comment from '../Comment/Comment';

const CommentList = ({ comments, onLoadMore }) => {
  return (
    <div>
      {comments.map((comment) =>
        <Comment key={comment.id} {...comment} level={0}/>,
      )}
    </div>
  );
};

export default CommentList;

// TODO: Sorting dropdown (Top/Recent). See the sketch file
// TODO: PropTypes
