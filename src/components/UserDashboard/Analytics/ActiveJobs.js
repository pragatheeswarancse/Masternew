import React from 'react';
import styled from 'styled-components';

const CardBottom = styled.div`
  position: absolute;
  background-color: #fafbfd;
  padding: 10px 20px;
  bottom: 0;
  width: 100%;
  left: 0;
  min-height: 44px;
`;

const ActiveJobs = () => {
  return (
    <div className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 py-2">
            <div className="card analytic-card-height analytic-card-rounded border-0 overflow-hidden">
              <div className="d-flex flex-column card-body">
                <div className="card-title">
                  <h5 className="text-uppercase theme-color">Active Jobs</h5>
                </div>
                <div className="card-text align-self-center justify-self-center my-auto">
                  <span className="display-4 text-dark font-weight-bolder">20</span>
                  <span className="h5 pl-2 text-muted">Openings</span>
                </div>
                <CardBottom className="d-flex justify-content-between font-weight-bold text-muted" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-2">
            <div className="card analytic-card-height analytic-card-rounded border-0 overflow-hidden">
              <div className="d-flex flex-column card-body">
                <div className="card-title">
                  <h5 className="text-uppercase theme-color">Application Received</h5>
                </div>
                <div className="card-text align-self-center justify-self-center my-auto">
                  <span className="display-4 text-dark font-weight-bolder">35</span>
                  <span className="h5 pl-2 text-muted">Today</span>
                </div>
                <CardBottom className="d-flex justify-content-between font-weight-bold text-muted">
                  <span>TOTAL APPLICATIONS</span>
                  <span>450</span>
                </CardBottom>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-2">
            <div className="card analytic-card-height analytic-card-rounded border-0 overflow-hidden">
              <div className="d-flex flex-column card-body">
                <div className="card-title">
                  <h5 className="text-uppercase theme-color">Jobs by Popularity</h5>
                </div>
                <div className="card-text align-self-center justify-self-center my-auto">
                  <span className="display-4 text-dark font-weight-bolder">35</span>
                  <span className="h5 pl-2 text-muted">Today</span>
                </div>
                <CardBottom className="d-flex justify-content-between font-weight-bold text-muted">
                  <span>TOTAL APPLICATIONS</span>
                  <span>450</span>
                </CardBottom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveJobs;
