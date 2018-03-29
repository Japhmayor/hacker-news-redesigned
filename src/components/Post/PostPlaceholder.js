import React from 'react';
import postPlaceholderImage from '../../images/post-placeholder.svg';

// TODO: The placeholder is ugly and generic. Need something that works & looks better.

class PostPlaceholder extends React.Component {
  state = {};
  
  render() {
    return (
      <div>
        <img
          src={postPlaceholderImage}
          alt="Loading"
          style={{width: '100%', height: 78}}
        />
      </div>
    )
  }
}

export default PostPlaceholder;

// TODO: aria-live
