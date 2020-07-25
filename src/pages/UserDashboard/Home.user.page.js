import React from 'react';
import Welcome from '../../components/UserDashboard/Welcome';
import ActiveJobs from '../../components/UserDashboard/Analytics/ActiveJobs';
import Layout from '../../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <ActiveJobs />
    </Layout>
  );
};

export default Home;
