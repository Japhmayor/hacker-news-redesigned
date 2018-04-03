import React from 'react';
import PropTypes from 'prop-types';
import PollOption from './PollOption';
import PollWrapper from './PollWrapper';
import PollTotal from './PollTotal';

const Poll = ({ totalVotes, options }) => (
  <PollWrapper>
    {options.map(option => {
      return <PollOption key={option.text} {...option} />
    })}
    <PollTotal>{totalVotes} votes</PollTotal>
  </PollWrapper>
);

Poll.propTypes = {
  totalVotes: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default Poll;
