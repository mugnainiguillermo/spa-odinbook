import { createStyles } from '@material-ui/core';
import imagesUrls from 'utils/images-url';

const styles = (theme) => {
  return createStyles({
    background: {
      backgroundImage: `url(${imagesUrls.landingBackground})`,
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center',
    },
    button: {
      minWidth: 200,
    },
    h5: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
      },
    },
    more: {
      marginTop: theme.spacing(2),
    },
  });
};

export default styles;