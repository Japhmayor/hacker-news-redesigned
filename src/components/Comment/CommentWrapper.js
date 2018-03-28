import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';
import { fontSizeSmall } from '../../styles/settings/typography';

const CommentWrapper = styled.div`
  font-size: ${fontSizeSmall};
  margin-bottom: ${spacing(8)};
  
  & > & {
    margin: ${spacing(5)} 0 0 ${spacing(6)};
  }
`;

export default CommentWrapper;
