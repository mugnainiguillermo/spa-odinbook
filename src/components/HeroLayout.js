import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './HeroLayout.styles';

const HeroLayout = ({ backgroundClassName, children, classes }) => {
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
      </Container>
    </section>
  );
}

HeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroLayout);
