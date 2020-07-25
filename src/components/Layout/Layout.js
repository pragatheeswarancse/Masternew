import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Sidebar>{props.children}</Sidebar>
    </>
  );
};

export default Layout;
