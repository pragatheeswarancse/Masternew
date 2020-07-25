import React from 'react';
import {Route} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Home from './Home.user.page';
import CreateJob from './CreateJob.user.page';

const UserDashboard = ({match}) => {
  return (
    <>
      <Layout>
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.path}/create/job`} component={CreateJob} />
      </Layout>
    </>
  );
};

export default UserDashboard;
