import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { CircularProgress } from '@material-ui/core';
import urls from "utils/urls";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <CircularProgress />,
      loginOptions: {
        redirectUri: urls.baseUrl + args.path,
      },
    })}
    {...args}
  />
);

export default ProtectedRoute;