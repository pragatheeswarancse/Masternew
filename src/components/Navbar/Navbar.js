import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Dropdown from '../UserDashboard/Dropdown/Dropdown';

import logo from '../../assets/logo.svg';
import notificationIcon from '../../assets/notificationcolored.svg';
import avatar from '../../assets/avatar.jpg';
import dropdown from '../../assets/dropdown.svg';

const NavUser = styled.button`
  background-color: #fafbfd;
  border: 1px solid #f1f3fa;
  border-width: 0 1px;
  text-decoration: none !important;
`;

const Navbar = ({currentUser}) => {
  return (
    <nav className="navbar sticky-top bg-light flex-nowrap p-0 shadow">
      <a href="!#" className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
        <img src={logo} alt="logo" />
      </a>

      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <ul className="align-items-center navbar-nav flex-row list-unstyled m-0 px-3 list-inline">
        <li className="nav-item text-nowrap px-3 text-uppercase d-md-inline d-none">
          12-JUN-2020 11:51 AM
        </li>
        <li className="nav-item px-3">
          <img src={notificationIcon} alt="notification" />
        </li>
        <li className="nav-item px-3 dropdown">
          <NavUser
            className="dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={avatar} className={`rounded-circle ${avatar}`} alt="avatar" />
            <span className="px-2 d-md-inline d-none">John Walker </span>
            <span className="d-md-inline d-none">
              <img src={dropdown} alt="dropdown" />
            </span>
          </NavUser>

          <Dropdown />
        </li>
      </ul>
    </nav>
  );
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect()(Navbar);
