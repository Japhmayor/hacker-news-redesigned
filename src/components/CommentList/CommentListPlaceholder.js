import React from 'react';
import commentListPlaceholderImage from '../../images/comment-list-placeholder.svg';

const CommentListPlaceholder = (props) => (
  <div>
    <img
      src={commentListPlaceholderImage}
      alt="Loading"
      role="presentation"
      style={{
        width: '100%',
        height: 78,
      }}
    />
  </div>
);

export default CommentListPlaceholder;
