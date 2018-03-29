import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/settings/colors';

const CommentsEmptyState = styled.h2`
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid ${colors.neutral['80']};
`;

export default CommentsEmptyState;
