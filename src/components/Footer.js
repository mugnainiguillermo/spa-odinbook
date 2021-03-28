import { Container, Grid, Link, Typography, withStyles } from '@material-ui/core';
import { GitHub as GitHubIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import urls from 'utils/urls';
import styles from './Footer.styles';

const GitHub = () => {
  return (
    <Link href={urls.githubRepo} underline="none">
      <Grid container direction="row" spacing={1} alignItems="center">
        <Grid item>
          <GitHubIcon />
        </Grid>
        <Grid item>
          <Typography>
            Guillermo Mugnaini
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};

const Copyright = () => {
  return (
    <>
      {'© '}
      <Link color="inherit" href={urls.spaBase}>
        Odinbook
      </Link>{' '}
      {new Date().getFullYear()}
    </>
  );
}

const Footer = ({ classes }) => {
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={4}
        >
          <Grid item className={classes.icons}>
            <GitHub />
          </Grid>
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);