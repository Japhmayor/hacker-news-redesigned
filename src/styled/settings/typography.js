// ========================================================================
//
// Typography
//
// ========================================================================


//
// Typefaces
//

import { colors } from './colors';

const fontFamilyNative = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const fontFamily = 'Fira Sans';
export const fontFamilyBase = `${fontFamily}, ${fontFamilyNative}`;


//
// Font sizes
//

export const fontSizeSmall      = '15px';
export const fontSizeBase       = '18px';
export const fontSizeLarge      = '20px';
export const fontSizeExtraLarge = '24px';


//
// Line heights
//

export const lineHeightTight = 1.25;
export const lineHeightBase  = 1.5;
export const lineHeightLoose = 1.75;


//
// Weights
//

export const fontWeightNormal =    400;
export const fontWeightSemibold =  600;

const fontWeightBase = fontWeightNormal;

//
// Component-specific
// ===============================================================

//
// Body
//

export const bodyColor = colors.neutral['20'];
export const bodyBackground = colors.neutral['90'];


//
// Headings
//

export const h1FontSize = '48px';
export const h2FontSize = '42px';
export const h3FontSize = '36px';
export const h4FontSize = '30px';
export const h5FontSize = '24px';

export const h1FontWeight = fontWeightNormal;
export const h2FontWeight = fontWeightNormal;
export const h3FontWeight = fontWeightSemibold;
export const h4FontWeight = fontWeightSemibold;
export const h5FontWeight = fontWeightSemibold;

export const headingLineHeight = lineHeightTight;
