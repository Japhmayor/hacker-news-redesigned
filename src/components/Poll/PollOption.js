import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';

const PollItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
  & + & {
    margin-top: ${spacing(4)};
  }
`;

const PollIndicator = styled.div`
  flex: 1 0 100%;
  height: 12px;
  margin-top: ${spacing(1)};
  background-color: #d7e5ee; // TODO: Move colors to colors.js
  
  &::after {
    display: block;
    height: 100%;
    width: ${({percentage}) => percentage}%;
    background-color: #3897da;
    content: '';
  }
`;


const PollOption = ({ text, voteCount, percentage }) => (
  <PollItem>
    <div style={{flex: '1 1 80%'}}>{text}</div>
    <div style={{ marginLeft: spacing(3), flex: '1 0 auto', textAlign: 'right' }}>{voteCount}</div>
    
    <PollIndicator percentage={percentage}/>
  </PollItem>
);

PollOption.propTypes = {
  text: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default PollOption;

// Sort descending
// Something's wrong with http://localhost:3050/post/3298905
