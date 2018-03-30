import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';

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

export default PollIndicator;
