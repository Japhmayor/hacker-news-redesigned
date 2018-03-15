import styled from 'styled-components';
import { colors, white } from '../../styles/settings/colors';
import container from '../../styles/mixins/container';

const HeaderWrap = styled.header`
  ${container};
  display: flex;
  height: 64px;
  margin-bottom: 52px;
  color: ${white};
  background: ${colors.primary['50']};
  overflow: hidden;
`;

export default HeaderWrap;
