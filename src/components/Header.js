import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Avatar, Button, Link, Toolbar, Typography, withStyles } from '@material-ui/core';
import OdinbookIcon from 'components/OdinbookIcon';
import PropTypes from 'prop-types';
import React from 'react';
import urls from 'utils/urls';
import styles from './Header.styles';

const Header = ({ classes, pageTitle }) => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { name, picture } = user || {};

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" underline="none" color="inherit" style={{ lineHeight: '0' }}>
          <OdinbookIcon fontSize="large" />
        </Link>
        <Typography variant="h6" className={classes.title}>
          {pageTitle}
        </Typography>
        { isAuthenticated ? (
          <>
            <Button
              color="inherit"
              onClick={() => logout({ returnTo: window.location.origin })}
              className={classes.logoutButton}
            >
              Logout
            </Button>
            <Link href={`/profile/123456`} underline="none" color="inherit" style={{ lineHeight: '0' }}>
            <Avatar alt={name} src={picture} />
            </Link>
          </>
        ) : (
          <Button
            color="inherit"
            onClick={() =>loginWithRedirect({ redirectUri: urls.newsPage })}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);