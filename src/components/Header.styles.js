import { createStyles } from '@material-ui/core';

const styles = (theme) => {
  return createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginLeft: '10px',
      flexGrow: 1,
    },
    logoutButton: {
      marginRight: '20px',
    },
  });
};

export default styles;