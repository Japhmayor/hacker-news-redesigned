import styled from 'styled-components';
import { fontSizeLarge, fontWeightMedium } from '../../styles/settings/typography';
import { colors } from '../../styles/settings/colors';
import { spacing } from '../../styles/settings/spacing';
import { breakpoints } from '../../styles/settings/breakpoints';

const EntryTitle = styled.header`
  line-height: 1.4;
  font-weight: ${fontWeightMedium};
  color: ${colors.neutral['10']};
  margin-bottom: ${spacing(2)};
  
  @media (min-width: ${breakpoints.md}) {
    font-size: ${fontSizeLarge};
  }
`;

export default EntryTitle;
