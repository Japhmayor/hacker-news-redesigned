import styled from 'styled-components';
import { fontSizeLarge, fontWeightMedium } from '../../styles-old/settings/typography';
import { colors } from '../../styles-old/settings/colors';
import { spacing } from '../../styles-old/settings/spacing';
import { breakpoints } from '../../styles-old/settings/breakpoints';

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
