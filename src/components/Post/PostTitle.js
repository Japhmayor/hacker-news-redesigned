import styled from 'styled-components';
import { fontSizeSmall } from '../../styles/settings/typography';

const PostTitle = styled.h1`
  & > small {
    font-size: ${fontSizeSmall};
  }
`;

export default PostTitle;
