import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';

const PollItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
  & + & {
    margin-top: ${spacing(4)};
  }
`;
export default PollItem;
