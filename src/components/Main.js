import styled from 'styled-components';
import container from '../styles-old/mixins/container';
import { breakpoints } from '../styles-old/settings/breakpoints';
import { spacing } from '../styles-old/settings/spacing';

const Main = styled.main`
  ${container};
  padding-top: ${spacing(8)};
  padding-bottom: 72px;
  
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${spacing(10)};
  }
`;

export default Main;
