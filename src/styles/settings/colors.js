export const white = '#fff';
export const black = '#000';

const paletteColors = {
  gray: {
    10: '#282828',
    20: '#474747',
    30: '#646464',
    40: '#777777',
    50: '#a1a1a1',
    60: '#c8c8c8',
    70: '#d7d7d7',
    80: '#e4e4e4',
    90: '#fafafa',
  },
  
  orange: {
    10: 'hsl(22, 84%, 55%)',
    20: 'hsl(22, 84%, 55%)',
    30: 'hsl(22, 84%, 55%)',
    40: 'hsl(22, 84%, 55%)',
    50: '#ed732c',
    60: 'hsl(22, 82%, 58%)',
    70: 'hsl(22, 81%, 62%)',
    80: 'hsl(21, 78%, 72%)',
    90: 'hsl(25, 74%, 84%)'
  },
  
  blue: {
    10: 'hsl(201, 52%, 20%)',
    20: 'hsl(200, 44%, 26%)',
    30: 'hsl(201, 35%, 34%)',
    40: 'hsl(200, 30%, 42%)',
    50: 'hsl(199, 25%, 50%)',
    60: 'hsl(198, 30%, 58%)',
    70: 'hsl(198, 37%, 67%)',
    80: 'hsl(196, 46%, 76%)',
    90: 'hsl(193, 66%, 85%)',
  }
};

export const colors = {
  primary: paletteColors.orange,
  accent: paletteColors.blue,
  neutral: paletteColors.gray,
  light: white,
  dark: black
};

