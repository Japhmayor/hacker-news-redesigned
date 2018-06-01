import React from 'react';
import pollPlaceholder from '../../images/poll-placeholder.svg';

const PollPlaceholder = () => (
  <img
    src={pollPlaceholder}
    alt="Loading"
    role="presentation"
    style={{
      display: 'block',
      width: '100%',
      height: 43,
      marginBottom: 16,
    }}
  />
);

export default PollPlaceholder;
