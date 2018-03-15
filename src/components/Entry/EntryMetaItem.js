import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';
import { colors } from '../../styles/settings/colors';
import { fontWeightSemibold } from '../../styles/settings/typography';

export const EntryMetaItem = styled.span`
  &:not(:first-child) {
    margin-left: ${spacing(2)};
    padding-left: ${spacing(2)};
    border-left: 1px solid ${colors.neutral['50']};
  }
`;

export const EntryScore = styled(EntryMetaItem)`
  font-weight: ${fontWeightSemibold};
`;

export const EntryTime = EntryMetaItem.withComponent('time');


