import { TextField, withStyles } from '@material-ui/core';

export const SearchTextField = withStyles((theme) => ({
  root: {
    '& label.MuiFormLabel-filled': {
      //color: theme.palette.secondary.main,
      color: 'white',
      top: -10,
    },
    '& label.Mui-focused': {
      //color: theme.palette.secondary.main,
      color: 'white',
      top: -10,
    },
    '& p.MuiFormHelperText-root': {
      position: 'relative',
      color: 'white',
      backgroundColor: '#ff6663',
      top: -60,
      left: -14,
      width: 186,
      borderRadius: '8px 8px 0px 0px',
      padding: 0,
      paddingLeft: 14,
      marginBottom: -22,
    },

    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: '6px 8px',

      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&:hover': {
        '& fieldset': {
          borderColor: theme.palette.secondary.main,
        },
      },
      '& fieldset': {
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px',
      backgroundColor: 'white',
    },
  },
}))(TextField);
