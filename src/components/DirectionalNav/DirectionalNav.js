import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';

export const DirectionalNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${spacing(8)} 0 -${spacing(10)}; // [1]
`;

// 1. Pull the <Main> padding up to make the bottom nav appear centered.
