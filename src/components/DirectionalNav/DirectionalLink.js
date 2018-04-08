import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles-old/settings/colors';
import arrowIcon from '../../images/icon-arrow.svg';
import { spacing } from '../../styles-old/settings/spacing';

const DirectionalLink = styled(RouterLink)`
  position: relative;
  margin-left: ${(props) => props.next ? 'auto' : 0};
  color: ${colors.neutral[20]};
  transition: opacity 0.1s ease-in-out;
  text-decoration: none;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    opacity: 0.6;
  }
  
  &::before,
  &::after {
    display: inline-block;
    width: 7px;
    height: 12px;
    content: '';
  }
`;

export const PrevLink = styled(DirectionalLink)`
  &::before {
    background-image: url(${arrowIcon});
    margin-right: ${spacing(2)};
  }
`;

export const NextLink = styled(DirectionalLink)`
  margin-left: auto;
  
  &::after {
    background-image: url(${arrowIcon});
    transform: rotate(180deg);
    margin-left: ${spacing(2)};
  }
`;
