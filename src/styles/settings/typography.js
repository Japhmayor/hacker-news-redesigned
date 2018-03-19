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

export const fontSizeExtraSmall = '14px';
export const fontSizeSmall      = '16px';
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
export const fontWeightMedium =    500;
export const fontWeightSemibold =  600;
export const fontWeightBold =  700;

export const fontWeightBase = fontWeightNormal;

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

export const headingFont = fontFamilyBase;

export const h1FontSize = '36px';
export const h2FontSize = '32px';
export const h3FontSize = '24px';
export const h4FontSize = '20px';
export const h5FontSize = '18px';

export const h1FontWeight = fontWeightSemibold;
export const h2FontWeight = fontWeightSemibold;
export const h3FontWeight = fontWeightSemibold;
export const h4FontWeight = fontWeightSemibold;
export const h5FontWeight = fontWeightSemibold;

export const headingLineHeight = 1.15;
