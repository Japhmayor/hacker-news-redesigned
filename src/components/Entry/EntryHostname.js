import styled from 'styled-components';
import { spacing } from '../../styles-old/settings/spacing';

const EntryHostname = styled.small`
  font-weight: 400;
  margin-left: ${spacing(1)};
`;

export default EntryHostname;

// TODO: Not particularly thrilled with the design of this.
//       Try designing a less obstrusive way of seeing the link:
//         * Should be clearly distuingishable as an external link

// TODO: Also, on real HN, this serves as a link that shows all entries from that domain.
//       Not sure if it's such a useful feature.
