import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';

const Logo = styled.a`
  align-self: center;
  margin-right: ${spacing(6)};
  transition: opacity 0.1s ease-in-out;
  
  &:hover {
    opacity: 0.85;
  }
  
  &:active {
    opacity: 0.7;
  }
  
  > img {
    display: block;
  }
`;

export default Logo;
