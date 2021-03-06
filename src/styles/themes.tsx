export type ThemeType = {
  primary: string
  primary2: string
  secondary: string
};

const themes: { [key: string]: ThemeType } = {
  light: {
    primary: 'hsl(350deg 90% 60%)',
    primary2: 'hsl(350deg 90% 95%)',
    secondary: 'hsl(350deg 90% 80%)',
  },
};

export default themes;
