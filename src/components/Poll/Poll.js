import React from 'react';
import PropTypes from 'prop-types';
import { spacing } from '../../styles/settings/spacing';
import { PollOption } from './index';

const Poll = ({ options }) => {
  const totalVotes = options.reduce((sum, option) => {
    return sum += option.score;
  }, 0);
  
  // TODO: This crap will be normalized with GraphQL
  const pollOptions = options.map(option => {
    const data = {
      text: option.text,
      voteCount: option.score,
      percentage: Math.round((option.score / totalVotes) * 10000) / 100,
    };
    
    return <PollOption key={option.text} {...data}/>
  });
  
  return (
    <div style={{ maxWidth: 750, marginTop: spacing(10) }}>
      {pollOptions}
      <div style={{textAlign: 'right', marginTop: spacing(3)}}>{totalVotes} votes</div>
    </div>
  );
};

Poll.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default Poll;
