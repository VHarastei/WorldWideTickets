// @ts-nocheck

import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Ubuntu',
      'Helvetica Neue',
      'sans-serif',
    ],
  },
  palette: {
    primary: {
      main: '#2cb162',
      contrastText: '#fff',
      light: '#5fc788',
    },
    secondary: {
      main: '#f6a62d',
      contrastText: '#fff',
    },
    error: {
      main: red[500],
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#14171a',
    },
  },
  shadows: [],
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: '#e8f5fe',
        },
      },
    },
    MuiButton: {
      contained: {
        color: '#2cb162',
        backgroundColor: '#eeeeee',
      },
      outlined: {
        color: '#2cb162',
        backgroundColor: '#eeeeee',
        borderColor: 'transparent',
      },
      root: {
        borderRadius: 8,
        padding: '0 50px',
        textTransform: 'none',
        fontSize: 20,
        height: 42,
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
  },
});

export default theme;
