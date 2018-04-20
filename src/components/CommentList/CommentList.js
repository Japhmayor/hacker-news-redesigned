import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <div>
    {comments.map((comment) =>
      <Comment key={comment.id} {...comment} level={0} />,
    )}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentList;

// TODO: Sorting dropdown (Top/Recent). See the sketch file
