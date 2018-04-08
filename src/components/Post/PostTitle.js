import styled from 'styled-components';
import { fontSizeBase } from '../../styles-old/settings/typography';

const PostTitle = styled.h1`
  & > small {
    font-size: ${fontSizeBase};
  }
`;

export default PostTitle;
