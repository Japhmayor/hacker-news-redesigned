import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';

const Logo = styled.div`
  align-self: center;
  margin-right: ${spacing(6)};
  transition: opacity 0.1s ease-in-out;
  
  > img {
    display: block;
  }
`;

export default Logo;
