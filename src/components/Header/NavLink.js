import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';
import { white } from '../../styles/settings/colors';

const NavLink = styled(RouterNavLink)`
  padding: ${spacing(5)} ${spacing(5)};
  line-height: ${spacing(6)};
  color: ${white};
  text-decoration: none;
  box-shadow: 0 -4px 0 0 transparent inset;
  transition: all 0.1s ease-in-out;
  
  // TODO: Still not looking good
  &:hover {
     background-color: rgba(245,125,56,0.4);
     box-shadow: 0 -4px 0 0 rgba(255,216,189,0.5) inset;
  }
  
  &:active {
    background-color: rgba(245,125,56,0.7);
  }
  
  &.is-active {
    pointer-events: none;
    background-color: rgba(245,125,56,0.7);
    box-shadow: 0 -4px 0 0 #ffd8bd inset;
  }
`;

export default NavLink;
