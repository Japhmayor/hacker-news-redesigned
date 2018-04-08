import styled from 'styled-components';
import { colors } from '../../styles/settings/colors';
import { fontWeightMedium, fontWeightNormal } from '../../styles/settings/typography';

// 1. FML

const EntryUserLink = styled.a`
  transition: opacity 0.1s ease-in-out;
  color: ${({ comment }) => comment ? '#2675a7' :  colors.neutral['40']}; // [1]
  font-weight: ${({ comment }) => comment ? fontWeightMedium :  fontWeightNormal}; // [1]
  text-decoration: ${({ comment }) => comment ? 'none' :  'underline'}; // [1]
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    opacity: 0.7;
  }
`;

export default EntryUserLink;

// TODO Probably could be refactored to a generic link
