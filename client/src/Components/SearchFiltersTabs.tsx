import { Tabs, withStyles } from '@material-ui/core';

export const SearchFiltersTabs = withStyles((theme) => ({
  root: {
    '& .Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      '&:hover': { color: 'white' },
    },
    '& .MuiTabs-indicator': {
      backgroundColor: 'transparent',
    },
    '& .MuiTab-root': {
      border: '1px solid transparent',
      '&:hover': {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        border: '1px solid',
      },
    },
  },
}))(Tabs);
