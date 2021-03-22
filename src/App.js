import {
  Route,
  Switch,
  useLocation,
  Redirect
} from 'react-router-dom';
import 'App.css';
import LoginPage from 'pages/LoginPage';
import NewsPage from 'pages/NewsPage';
import UserPage from 'pages/UserPage';

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && <header>HEADER</header>}
      <div>
        <Switch>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route >
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
      {location.pathname !== '/login' && <footer>FOOTER</footer>}
    </div>
  );
}

export default App;
