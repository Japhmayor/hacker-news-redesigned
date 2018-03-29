import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';
import { colors } from '../../styles/settings/colors';

const CommentBody = styled.div`
  margin-top: 6px;
  
  // Comment text from API is HTML, and a weird one.
  // This tweaks the spacing to ensure consistency.
  & > *:last-child {
    margin-bottom: 0;
  }
  
  p, blockquote, pre {
    margin-top: ${spacing(3)};
    margin-bottom: 0;
  }
  
  a {
    color: ${colors.neutral['20']};
    transition: opacity 0.1s ease-in-out;
    
    &:hover { // TODO: Occureneces of this are all over the place and need to be refactored.
      opacity: 0.85;
    }
    
    &:active {
      opacity: 0.7;
    }
  }
`;

export default CommentBody;
