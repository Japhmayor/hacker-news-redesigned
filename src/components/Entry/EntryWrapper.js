import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';
import { colors } from '../../styles/settings/colors';

const EntryWrapper = styled.div`
  & + & {
    margin-top: ${spacing(5)};
    padding-top: ${spacing(5)};
    border-top: 1px solid ${colors.neutral['80']};
  }
`;

export default EntryWrapper;
