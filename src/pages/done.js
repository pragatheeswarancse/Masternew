import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase.utils';
import { useHistory } from 'react-router-dom';
import validate from '../components/formValid/loginFormValidationRules';
import Layout from '../components/Layout/Layout';
import success from '../assets/success.svg';
import wpForm from '../assets/wpForm.svg';
import cloud from '../assets/cloud.svg';
import done from '../assets/done.svg';

function Done(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [values] = useState(props.location.data);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    firestore
      .collection('candidateDetail')
      .add(values)
      .then(() => {
        setIsSubmitting(true);
      })
      .catch((errors) => {
        console.log('error');
      });
  };

  const history = useHistory();

  const routeChange = () => {
    const path = `/dashboard/personal_detail`;
    history.push(path);
  };
  return (
    <div>
      <Layout>
        <div className="container col pt-5">
          <div className="card" style={{ border: 'none' }}>
            <div className="card-body">
              <nav className="nav nav-pills flex-column flex-sm-row hoverDes py-2">
                <li className="flex-sm-fill text-sm-center nav-link ">
                  <a style={{ backgroundColor: '#0747A6' }}>
                    <img src={wpForm} />
                  </a>
                  <span className="col-sm topManualEntry" style={{ color: '#cccccc' }}>
                    FIRST STEP
                  </span>
                  <p className="col-sm topManualEntry">Person Details</p>
                </li>
                <li className="flex-sm-fill text-sm-center nav-link hoverDes">
                  <a style={{ backgroundColor: '#0747A6' }}>
                    <img src={wpForm} />
                  </a>
                  <span className="col-sm topManualEntry" style={{ color: '#cccccc' }}>
                    SECOND STEP
                  </span>
                  <p className="col-sm topManualEntry">Experience</p>
                </li>
                <li className="flex-sm-fill text-sm-center nav-link hoverDes">
                  <a style={{ backgroundColor: '#0747A6' }}>
                    <img src={cloud} />
                  </a>
                  <span className="col-sm topManualEntry" style={{ color: '#cccccc' }}>
                    THIRD STEP
                  </span>
                  <p className="col-sm topManualEntry">Upload Resume</p>
                </li>
                <li className="flex-sm-fill text-sm-center nav-link hoverDes">
                  <a style={{ backgroundColor: '#0747A6' }}>
                    <img src={done} />
                  </a>
                  <span className="col-sm topManualEntry" style={{ color: '#cccccc' }}>
                    FOURTH STEP
                  </span>
                  <p className="col-sm  topManualEntry">Conformation</p>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img src={success} alt="success" />
                <h5 className="primary font-weight-bold">Candidate Added Successfully</h5>
              </div>
            </div>
          </div>
          <div className="col text-right pt-3">
            <span className="pr-5 col-3">
              <button
                type="button"
                className="btn font-weight-bold"
                style={{ backgroundColor: '#FFFFFF', color: '#0747A6' }}
              >
                Check Profile
              </button>
            </span>
            <span>
              <button
                type="button"
                className="btn btn-primary font-weight-bold"
                onClick={routeChange}
              >
                ADD ANOTHER
              </button>
            </span>
          </div>
        </div>
        <div className="col pt-3 " />
      </Layout>
    </div>
  );
}
export default Done;
