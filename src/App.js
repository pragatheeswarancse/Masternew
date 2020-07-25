import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import '@popperjs/core';

import Login from './pages/Login.page';
import UserDashboard from './pages/UserDashboard/UserDashboard.page';
import PersonalDetail from './pages/PersonalDetail';

import {AuthProvider} from './components/Auth/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import routes, {RenderRoutes} from './components/Routes';

function App() {
  return (
    <AuthProvider>
      <RenderRoutes routes={routes} />{' '}
    </AuthProvider>
  );
}
export default App;
