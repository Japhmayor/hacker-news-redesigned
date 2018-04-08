import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../styles/settings/spacing';
import { NextLink, PrevLink } from './DirectionalLink';

const DirectionalNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${spacing(8)} 0 -${spacing(10)}; // [1]
`;

// 1. Pull the <Main> padding up to make the bottom nav appear centered.


export const DirectionalNav = ({ shown, prevLinkShown, nextLinkShown, prevUrl, nextUrl }) => {
  if (!shown) {
    return null;
  }

  return (
    <DirectionalNavWrapper>
      {prevLinkShown &&
        <PrevLink
          to={prevUrl}>
          Previous
        </PrevLink>
      }

      {nextLinkShown &&
        <NextLink
          to={nextUrl}>
          Next
        </NextLink>
      }
    </DirectionalNavWrapper>
  );
};

