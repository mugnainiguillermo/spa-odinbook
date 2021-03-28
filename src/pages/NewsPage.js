import { useAuth0 } from '@auth0/auth0-react';
import { Grid, withStyles } from '@material-ui/core';
import Post from 'components/Post';
import SideBar from 'components/SideBar';
import imagesUrls from 'utils/images-url';
import styles from './NewsPage.styles';

const NewsPage = ({ classes }) => {
  const { user } = useAuth0();
  const posts = [{
    user: {
      id: 'id',
      name: 'Pepito',
      image: imagesUrls.landingBackground,
    },
    createdAt: '2021-03-28T18:02:18.688Z',
    text: 'U just posted this',
    image: imagesUrls.landingBackground,
    likes: [{
      id: 'id4',
      image: imagesUrls.landingBackground,
    }],
  },{
    user: {
      id: 'id',
      name: 'papaya',
      image: imagesUrls.landingBackground,
    },
    createdAt: '2021-02-21T12:02:18.688Z',
    text: 'U just posted thaaaaat',
    image: imagesUrls.landingBackground,
    likes: [{
      id: 'id2',
      image: imagesUrls.landingBackground,
    },{
      id: 'id3',
      image: imagesUrls.landingBackground,
    }],
  }];

  return (
    <Grid 
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      spacing={5}
      className={classes.root}
    >
      <Grid item md={2}>
        <SideBar {...{ user }}/>
      </Grid>
      <Grid item container md={4} direction="column" spacing={2}>
        {posts.map(post => (
          <Grid item>
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
      <Grid item md={3}>
        ADS
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(NewsPage);