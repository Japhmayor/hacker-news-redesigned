import styled from 'styled-components';
import { fontSizeLarge } from '../../styles/settings/typography';
import { colors } from '../../styles/settings/colors';
import { spacing } from '../../styles/settings/spacing';

const EntryTitle = styled.header`
  font-size: ${fontSizeLarge};
  color: ${colors.neutral['10']};
  margin-bottom: ${spacing(3)};
`;

export default EntryTitle;
