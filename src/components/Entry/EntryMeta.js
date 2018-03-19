import styled from 'styled-components';
import { fontSizeSmall } from '../../styles/settings/typography';
import { spacing } from '../../styles/settings/spacing';
import { colors } from '../../styles/settings/colors';

const EntryMeta = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: ${props => props.large ? '16px' : fontSizeSmall};
  line-height: ${spacing(5)};
  color: ${colors.neutral['40']};
`;

export default EntryMeta;
