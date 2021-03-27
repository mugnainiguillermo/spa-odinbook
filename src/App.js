import { useAuth0 } from '@auth0/auth0-react';
import 'App.css';
import ProtectedRoute from 'auth/ProtectedRoute';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { startCase } from 'lodash';
import HomePage from 'pages/HomePage';
import NewsPage from 'pages/NewsPage';
import ProfilePage from 'pages/ProfilePage';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth0();
  const pageTitle = startCase(location.pathname.split('/')[1]);

  return (
    <div>
      <Header pageTitle={pageTitle}/>
      <div>
        <Switch>
          <ProtectedRoute strict path="/profile/" component={ProfilePage} />
          <ProtectedRoute exact strict path="/news" component={NewsPage} />
          <Route exact strict path="/" component={() => isAuthenticated ? <Redirect to="/news" /> : <HomePage />} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
