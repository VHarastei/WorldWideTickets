import { Tabs, withStyles } from '@material-ui/core';

export const UserStyledTabs = withStyles((theme) => ({
  root: {
    '& .MuiTab-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
      textTransform: 'none',
      fontSize: 18,
      fontWeight: 500,
      minHeight: 48,
      '& .MuiTab-wrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: '0px 12px',
        margin: 0,
        '& .MuiSvgIcon-root': {
          margin: 0,
          marginRight: 6,
        },
      },
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.02);',
        transition: '0.3s',
      },
    },
  },
}))(Tabs);
