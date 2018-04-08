import styled from 'styled-components';
import { spacing } from '../../styles-old/settings/spacing';

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  align-self: start;
  align-items: stretch;
  padding-bottom: 50px;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  margin-right: -${spacing(6)};
`;

export default Nav;
