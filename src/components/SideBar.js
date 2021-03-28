import { Avatar, Button, Grid, Paper, Typography, withStyles } from '@material-ui/core';
import { Feedback as FeedbackIcon, Mail as MailIcon, People as PeopleIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import urls from 'utils/urls';
import styles from './SideBar.styles';

const Sidebar = ({ classes, user }) => {
  const { name, picture, updated_at, email } = user || {};

  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container direction="column" spacing={1} alignItems="flex-start">
        <Grid item>
          <Button fullWidth href={urls.profilePage}>
            <Avatar alt={name} src={picture} className={classes.avatar} />
            <Typography variant="button">
              {name}
            </Typography>
          </Button>
        </Grid>
        <Grid item container direction="row" alignItems="center" spacing={1}>
          <Grid item>
            <PeopleIcon fontSize="large" color="primary" />
          </Grid>
          <Grid item>
            <Typography>
              {`Total Friends: ${20}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="row" alignItems="center" spacing={1}>
          <Grid item>
            <FeedbackIcon fontSize="large" color="secondary" />
          </Grid>
          <Grid item>
            <Typography>
            {`Total Posts: ${3}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container direction="row" alignItems="center" spacing={1}>
          <Grid item>
            <MailIcon fontSize="large" color="action" />
          </Grid>
          <Grid item>
            <Typography>
              {email}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>
            Last login on {updated_at.split('T')[0]}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);