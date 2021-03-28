import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Paper, Typography, withStyles } from '@material-ui/core';
import { Favorite as FavoriteIcon, Comment as CommentIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import urls from 'utils/urls';
import styles from './Post.styles';

const Post = ({ classes, post }) => {
  const { user, createdAt, text, image, likes } = post;
  return (
    <Card className={classes.root} raised>
      <CardHeader
        avatar={<Avatar alt={user.name} src={user.image} />}
        title={user.name}
        subheader={new Date(createdAt).toDateString()}
      />
      <CardMedia
        className={classes.cardMedia}
        image={image}
      />
      <CardContent>
        <Typography variant="body1" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container direction="column">
          <Grid item>
            <IconButton aria-label="like this post">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="comment this post">
              <CommentIcon />
            </IconButton>
          </Grid>
          <Grid item className={classes.likeCounter}>
            <Typography variant="caption">
              <strong>
                {(likes.length > 0) && (likes.length === 1) ? `1 Like` : `${likes.length} Likes`}
              </strong>
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);