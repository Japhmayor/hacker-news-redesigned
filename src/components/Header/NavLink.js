import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';
import { white } from '../../styles/settings/colors';

const NavLink = styled.a`
  padding: ${spacing(5)} ${spacing(5)};
  line-height: ${spacing(6)};
  color: ${white};
  text-decoration: none;
  transition: background-color 0.1s ease-in-out;
  box-shadow: 0 -4px 0 0 transparent inset;
  
  & :hover {
    background-color: rgba($white, 0.07);
  }
  
  & :active {
  }
  
  & .is-active {
    background-color: rgba(#de5f16, 0.6);
  }
`;

export default NavLink;
