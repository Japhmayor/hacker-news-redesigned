import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';
import { colors } from '../../styles/settings/colors';

const EntryWrapper = styled.div`
  margin-bottom: ${spacing(5)};
  padding-bottom: ${spacing(5)};
  border-bottom: 1px solid ${colors.neutral['80']};
`;

export default EntryWrapper;
