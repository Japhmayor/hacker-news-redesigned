import { css } from 'styled-components';
import { containerGutter, containerWidth } from '../settings/container';

const container = css`
  padding-left: ${containerGutter}px;
  padding-right: ${containerGutter}px;
  
  @media (min-width: ${containerWidth + containerGutter * 2}px) { // "CSS is hard. CSS is broken".
    padding-right: calc((100vw - ${containerWidth}px) / 2);
    padding-left: calc((100vw - ${containerWidth}px) / 2);
  }
`;

export default container;
