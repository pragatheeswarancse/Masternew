import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-primary sidebar collapse"
        >
          <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item py-3">
                <Link to="/dashboard" className="nav-link active text-white">
                  <div className="align-middle d-inline">
                    <span className="float-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21.375"
                        height="19"
                        viewBox="0 0 21.375 19"
                      >
                        <path
                          className="a"
                          d="M58.188,134l-2.812-2.632V127h-2.25v2.263L47.5,124,36.813,134h2.91l7.778-7,7.9,7Zm-18.562,1h2.25v6h11.25v-6h2.25v8H39.625Z"
                          transform="translate(-36.813 -124)"
                        />
                      </svg>
                    </span>
                    <span className="px-3">Dashboard</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item py-3">
                <Link to="/dashboard/create" className="nav-link text-dark">
                  <div className="align-middle d-inline">
                    <span className="float-left" />
                    <span className="px-3">Create Job</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item py-3">
                <a href="/" className="nav-link text-dark">
                  <div className="align-middle d-inline">
                    <span className="float-left" />
                    <span className="px-3">View Job</span>
                  </div>
                </a>
              </li>
              <li className="nav-item py-3">
                <a href="/dashboard/personal_detail" className="nav-link text-dark">
                  <div className="align-middle d-inline">
                    <span className="float-left" />
                    <span className="px-3">Manual Entry</span>
                  </div>
                </a>
              </li>

              <li className="nav-item py-3">
                <a href="/" className="nav-link text-dark">
                  <div className="align-middle d-inline">
                    <span className="float-left" />
                    <span className="px-3">Global Search</span>
                  </div>
                </a>
              </li>

              <li className="nav-item py-3">
                <a href="/" className="nav-link text-dark">
                  <div className="align-middle d-inline">
                    <span className="float-left" />
                    <span className="px-3">Payroll</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
