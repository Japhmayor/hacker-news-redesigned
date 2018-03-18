import styled from 'styled-components';
import container from '../styles/mixins/container';
import { breakpoints } from '../styles/settings/breakpoints';
import { spacing } from '../styles/settings/spacing';

const Main = styled.main`
  ${container};
  padding:${spacing(8)} 0  72px;
  
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${spacing(10)};
  }
`;

export default Main;
