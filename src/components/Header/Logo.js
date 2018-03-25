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

// TODO: Constantly find myself wanting to click on the logo.
//       Not sure if it should replace the "Top" and otherwise
//       indicate that you're on the Top feed.
