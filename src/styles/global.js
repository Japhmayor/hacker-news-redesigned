/*
*
* Global styles
*
*/


import { injectGlobal } from 'styled-components';
import {
  fontFamilyBase,
  fontSizeBase,
  fontWeightBase,
  lineHeightBase,
  bodyBackground,
  bodyColor,
  headingLineHeight,
  h1FontSize, h1FontWeight,
  h2FontSize, h2FontWeight,
  h3FontSize, h3FontWeight,
  h4FontSize, h4FontWeight,
  h5FontSize, h5FontWeight,
} from './settings/typography';

injectGlobal`

// 1. Set default box-sizing to border-box globally.
//
// 2. Prefer antialiased font rendering on OS X/MacOS over the default \`subpixel-antialiased\`.
//    Results in more consistent type rendering across platforms and design software.
//    At the same time eliminates transform-related font flickering in older Safari versions.
//
// 3. Setting @viewport causes scrollbars to overlap content in IE11 and Edge, so
//    we force a non-overlapping, non-auto-hiding scrollbar to counteract. (Credit: Bootstrap)

  html {
    box-sizing: border-box; // [1]
    -ms-overflow-style: scrollbar; // [3]
    -webkit-font-smoothing: antialiased; // [2]
    -moz-osx-font-smoothing: grayscale; //  [2]
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit; // [1]
  }
  
  address,
  details,
  blockquote,
  p,
  pre,
  dl, ol, ul,
  figure,
  hr,
  table,
  fieldset {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  body {
    font-family: ${fontFamilyBase};
    font-size: ${fontSizeBase};
    font-weight: ${fontWeightBase};
    line-height: ${lineHeightBase};
    color: ${bodyColor};
    background-color: ${bodyBackground};
  }
  
  
  //
  // Headings
  //
  
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: ${headingLineHeight};
  }
  
  h1, .h1 {
    font-size: ${h1FontSize};
    font-weight: ${h1FontWeight};
  }
  
  h2, .h2 {
    font-size: ${h2FontSize};
    font-weight: ${h2FontWeight};
  }
  
  h3, .h3 {
    font-size: ${h3FontSize};
    font-weight: ${h3FontWeight};
  }
  
  h4, .h4 {
    font-size: ${h4FontSize};
    font-weight: ${h4FontWeight};
  }
  
  h5, .h5 {
    font-size: ${h5FontSize};
    font-weight: ${h5FontWeight};
  }
  
  
  //
  // Paragraphs
  //
  
  // TODO: Add add margin to to the paragraphs
  // First paragraph isn't wrapped in "p" in the API
  // Look into other variations as well, e.g. if the second element(paragraph) is a list or whatever
  
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  
  //
  // Lists
  //
  
  ul, ol {
    padding: 0;
    margin-left: 2rem;
  }
  
  
  //
  // Horizontal rule
  //
  
  hr {
    margin: 0 1rem;
  }
`;
