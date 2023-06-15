const lightTheme = {
  mode: 'light',
  colors: {
    primary: '#00897b',
    primaryDark: '#00564d',
    dark: '#363636',
    dark100: '#282828',
    light: '#ffffff'
  }
};

lightTheme.colors.background = lightTheme.colors.dark;

const darkTheme = {
  mode: 'dark',
  colors: {
    primary: '#D16666',
    primaryDark: '#4A0505',
    dark: '#231B1B',
    dark200: '#4F6D7A',
    light: '#ffffff'
  }
}

darkTheme.colors.background = darkTheme.colors.light;

export { lightTheme, darkTheme };
