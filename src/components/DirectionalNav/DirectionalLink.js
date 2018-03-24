import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../../styles/settings/colors';
import styled from 'styled-components';

const DirectionalLink = styled(RouterLink)`
  color: ${colors.neutral[20]};
  transition: 0.1s ease-in-out;
  
  &:hover {
    color: ${colors.neutral[40]};
  }
  
  &:active {
    color: ${colors.neutral[50]};
  }
  
  margin-left: ${(props) => props.next ? 'auto' : 0 };
`;

export const PrevLink = styled(DirectionalLink)``;

export const NextLink = styled(DirectionalLink)`
  margin-left: auto;
`;
