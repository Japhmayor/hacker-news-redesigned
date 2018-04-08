import { css } from 'styled-components';
import { containerGutterLarge, containerGutterSmall, containerWidth } from '../settings/container';
import { breakpoints } from '../settings/breakpoints';

const container = css`
  padding-left: ${containerGutterSmall}px;
  padding-right: ${containerGutterSmall}px;
  
  @media (min-width: ${breakpoints.sm}) {
    padding-left: ${containerGutterLarge}px;
    padding-right: ${containerGutterLarge}px;
  }
  
  @media (min-width: ${containerWidth + containerGutterLarge * 2}px) { // "CSS is hard. CSS is broken".
    padding-right: calc((100vw - ${containerWidth}px) / 2);
    padding-left: calc((100vw - ${containerWidth}px) / 2);
  }
`;

export default container;
