import styled from 'styled-components';
import { spacing } from '../../styles-old/settings/spacing';
import { colors } from '../../styles-old/settings/colors';

const EntryWrapper = styled.div`
  margin-bottom: ${spacing(5)};
  padding-bottom: ${spacing(5)};
  border-bottom: 1px solid ${colors.neutral['90']};
`;

export default EntryWrapper;
