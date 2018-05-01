import React from 'react';
import commentListPlaceholderImage from '../../images/comment-list-placeholder.svg';

const CommentListPlaceholder = (props) => (
  <div role="region" aria-live="polite">
    <img
      src={commentListPlaceholderImage}
      alt="Loading"
      style={{
        width: '100%',
        height: 78,
      }}
    />
  </div>
);

export default CommentListPlaceholder;
