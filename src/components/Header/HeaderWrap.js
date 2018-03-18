import styled from 'styled-components';
import { colors, white } from '../../styles/settings/colors';
import container from '../../styles/mixins/container';
import { headingFont } from '../../styles/settings/typography';

const HeaderWrap = styled.header`
  ${container};
  display: flex;
  height: 64px;
  font-family: ${headingFont};
  color: ${white};
  background: ${colors.primary['50']};
  overflow: hidden;
`;

export default HeaderWrap;
