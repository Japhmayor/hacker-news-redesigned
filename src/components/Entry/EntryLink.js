import styled from 'styled-components';
import { colors } from '../../styles/settings/colors';
import { Link } from 'react-router-dom';
import React from 'react';

const EntryLink = styled(Link)`
  color: ${colors.neutral['10']};
  text-decoration: none;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${colors.neutral['20']};
  }

  &:active {
    color: ${colors.neutral['30']};
  }
`;

const EntryLinkExternal = EntryLink.withComponent('a');

export default ({ href, title, external}) => (
  external ? (
    <EntryLinkExternal href={href}>{title}</EntryLinkExternal>
  ) : (
    <EntryLink to={href}>{title}</EntryLink>
  )
);

