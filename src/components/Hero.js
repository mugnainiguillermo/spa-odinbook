import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HeroLayout from 'components/HeroLayout';
import PropTypes from 'prop-types';
import imagesUrls from 'utils/images-url';
import urls from 'utils/urls';
import styles from './Hero.styles';

const Hero = ({ classes }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <HeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={imagesUrls.landingBackground}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        Become a true viking
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Meet and share unforgettable memories with other nordic warriors.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        onClick={() =>
          loginWithRedirect({
            redirectUri: urls.newsPage,
            screen_hint: 'signup',
          })
        }
      >
        Join now
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </HeroLayout>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
