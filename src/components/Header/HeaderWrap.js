import styled from 'styled-components';
import { colors, white } from '../../styles/settings/colors';
import container from '../../styles/mixins/container';
import { spacing } from '../../styles/settings/spacing';
import { breakpoints } from '../../styles/settings/breakpoints';
import { headingFont } from '../../styles/settings/typography';

const HeaderWrap = styled.header`
  ${container};
  display: flex;
  height: 64px;
  margin-bottom: ${spacing(8)};
  font-family: ${headingFont};
  color: ${white};
  background: ${colors.primary['50']};
  overflow: hidden;
  
  @media (min-width: ${breakpoints.md}) {
      margin-bottom: ${spacing(10)};
  }
`;

export default HeaderWrap;
