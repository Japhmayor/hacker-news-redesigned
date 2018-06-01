import React from 'react';
import entryPlaceholderImage from '../../images/entry-placeholder.svg';

const EntryPlaceholder = (props) => (
  <div style={{ marginBottom: 20 }}>
    <img
      src={entryPlaceholderImage}
      role="presentation"
      alt="Loading"
      style={{
        width: '100%',
        height: 78,
      }}
    />
  </div>
);

export default EntryPlaceholder;
