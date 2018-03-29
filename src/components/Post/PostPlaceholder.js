import React from 'react';
import postPlaceholderImage from '../../images/post-placeholder.svg';

// TODO: The placeholder is ugly and generic. Need something that works & looks better.

const PostPlaceholder = (props) => (
  <div role="region" aria-live="polite">
    <img
      src={postPlaceholderImage}
      alt="Loading"
      style={{width: '100%', height: 78}}
    />
  </div>
);

export default PostPlaceholder;
