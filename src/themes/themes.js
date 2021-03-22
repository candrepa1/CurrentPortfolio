import { createMuiTheme } from '@material-ui/core/styles';

export const paletteTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#3b3e3f',
        main: '#151819',
        dark: '#000000',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#ffffff',
        main: '#efebeb',
        dark: '#bdb9b9',
        contrastText: '#000000',
      },
    },
});