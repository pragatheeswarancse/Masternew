import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../Auth/Auth';

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
  const {user} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routerProps) =>
        // eslint-disable-next-line no-nested-ternary
        user.loading ? (
          <h1>Loading</h1>
        ) : user.currentUser ? (
          <RouteComponent {...routerProps} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
