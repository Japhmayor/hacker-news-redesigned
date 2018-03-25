import React from 'react';
import entryPlaceholderImage from '../../images/entry-placeholder.svg';

// TODO: The placeholder is ugly and generic. Need something that works & looks better.

class EntryPlaceholder extends React.Component {
  state = {};
  
  render() {
    return (
      <div style={{marginBottom: 20}}>
        <img
          src={entryPlaceholderImage}
          alt="Loading"
          style={{width: '100%', height: 78}}
        />
      </div>
    )
  }
}

export default EntryPlaceholder;
