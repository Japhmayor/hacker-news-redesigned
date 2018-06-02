import React from 'react';
import postPlaceholderImage from '../../images/post-placeholder.svg';

const PostPlaceholder = (props) => (
  <div>
    <img
      src={postPlaceholderImage}
      alt="Loading"
      role="presentation"
      style={{
        width: '100%',
        height: 78,
      }}
    />
  </div>
);

export default PostPlaceholder;
