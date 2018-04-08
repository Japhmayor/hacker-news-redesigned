import styled from 'styled-components';
import { colors, white } from '../../styles-old/settings/colors';
import container from '../../styles-old/mixins/container';
import { headingFont } from '../../styles-old/settings/typography';

const HeaderWrap = styled.header`
  ${container};
  display: flex;
  height: 64px;
  font-family: ${headingFont};
  color: ${white};
  background: ${colors.primary['50']}; // TODO: Need better orange
  overflow: hidden;
`;

export default HeaderWrap;
