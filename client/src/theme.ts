// @ts-nocheck

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
    },
    secondary: {
      main: '#f6a62d',
      contrastText: '#fff',
    },

    error: {
      main: red.A400,
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
    // MuiRipple: {
    //   // Name of the rule
    //   child: {
    //     // Some CSS
    //     backgroundColor: "red"
    //   }
    // },
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
      // outlinedPrimary: {
      //  border: 'none'
      // },
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px',
        },
        '&:before': {
          borderColor: '#000',
          borderBottomWidth: '2px',
        },
      },
      input: {
        backgroundColor: 'rgb(245, 248, 250)',
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 15,
      },
    },
    MuiDialogActions: {
      root: {
        marginBottom: 8,
      },
    },
    MuiDialogTitle: {
      root: {
        borderBottom: '1px solid rgb(204, 214, 221)',
        marginBottom: 10,
        padding: '10px 15px',
        '& h2': {
          display: 'flex',
          alignItems: 'center',
          fontWeight: 800,
        },
        '& button': {
          padding: 8,
          marginRight: 20,
        },
      },
    },
  },
});

export default theme;
