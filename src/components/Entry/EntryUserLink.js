import styled from 'styled-components';
import { colors } from '../../styles/settings/colors';

const EntryUserLink = styled.a`
  color: ${colors.neutral['30']};
  transition: color 0.1s ease-in-out;
  
  &:hover {
    color: ${colors.neutral['40']};
  }
  
  &:active {
    color: ${colors.neutral['50']};
  }
`;

export default EntryUserLink;
