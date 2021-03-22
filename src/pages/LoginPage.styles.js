import { createStyles } from '@material-ui/core';

const styles = (theme) => {
  return createStyles({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://us.123rf.com/450wm/yacobchuk/yacobchuk1905/yacobchuk190501036/122671766-close-friends-two-cheerful-friends-wearing-viking-helmets-clanging-their-glasses-together-and-laughi.jpg?ver=6)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });
};

export default styles;