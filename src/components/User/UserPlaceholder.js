import React from 'react';
import userPlaceholderImage from '../../images/user-placeholder.svg';

const UserPlaceholder = (props) => (
  <div>
    <img
      src={userPlaceholderImage}
      alt="Loading"
      role="presentation"
      style={{
        width: '100%',
        height: 90,
      }}
    />
  </div>
);

export default UserPlaceholder;
