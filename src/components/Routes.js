// This functionality is not yet implemented

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/Login.page';
import Home from '../pages/UserDashboard/Home.user.page';
import CreateJob from '../pages/UserDashboard/CreateJob.user.page';
import PersonalDetail from '../pages/PersonalDetail';
import Experience from '../pages/Experience';
import UploadResume from '../pages/UploadResume';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Done from '../pages/done';

const Routes = [
  {
    path: '/',
    key: 'LOGIN',
    exact: true,
    private: false,
    component: LoginPage,
  },
  {
    path: '/dashboard',
    key: 'DASHBOARD',
    private: true,
    // eslint-disable-next-line no-use-before-define
    component: RenderRoutes,
    routes: [
      {
        path: '/dashboard',
        key: 'APP_ROOT',
        exact: true,
        component: Home,
      },
      {
        path: '/dashboard/create',
        key: 'APP_JOB',
        exact: true,
        component: CreateJob,
      },
      {
        path: '/dashboard/personal_detail',
        key: 'PERSONAL_DETAIL',
        exact: true,
        component: PersonalDetail,
      },
      {
        path: '/dashboard/experience',
        key: 'EXPERIENCE',
        exact: true,
        component: Experience,
      },
      {
        path: '/dashboard/upload_resume',
        key: 'UPLOAD_RESUME',
        exact: true,
        component: UploadResume,
      },
      {
        path: '/dashboard/done',
        key: 'done',
        exact: true,
        component: Done,
      },
    ],
  },
];

export default Routes;

function RouteWithSubRoutes(route) {
  return !route.private ? (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  ) : (
    route.routes.map((sub, i) => (
      <PrivateRoute path={sub.path} exact={sub.exact} component={sub.component} />
    ))
  );
}

export function RenderRoutes({routes}) {
  return (
    <Switch>
      {' '}
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}{' '}
      <Route component={() => <h1> Not Found! </h1>} />
    </Switch>
  );
}
