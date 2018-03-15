import styled from 'styled-components';
import { colors } from '../../styles/settings/colors';

const EntryLink = styled.a`
  color: ${colors.neutral['10']};
  text-decoration: none;
  transition: color 0.1s ease-in-out;
  
  &:hover {
    color: ${colors.neutral['20']};
  }
  
  &:active {
    color: ${colors.neutral['30']};
  }
`;

export default EntryLink;
