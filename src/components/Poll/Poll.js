import React from 'react';
import PropTypes from 'prop-types';
import PollOption from './PollOption';
import PollWrapper from './PollWrapper';
import PollTotal from './PollTotal';

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
    <PollWrapper>
      {pollOptions}
      <PollTotal>{totalVotes} votes</PollTotal>
    </PollWrapper>
  );
};

Poll.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default Poll;
