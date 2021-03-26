const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const commonColors = {
  red: {
    '100': '#EA9183',
    '300': '#E6523C',
    '400': '#DB4F39',
    '500': '#B3402E',
    '700': '#66251B',
    '900': '#3B2421',
  },
  blue: {
    '300': '#2ECADB',
    '400': '#17838F',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    ...commonColors,
    background: '#fff',
    heading: '#000',
    headingBg: '#f8f8f8',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#ff2a13',
    accent: '#ff2a13',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    ...commonColors,
    background: '#030E0F',
    heading: '#fff',
    headingBg: '#030E0F',
    text: '#fff',
    preFormattedText: '#000',
    link: '#E07462',
    accent: '#E07462',
  },
};

export { lightTheme, darkTheme };
