import React, {useState, useContext} from 'react';

import {withRouter, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import loginLogo from '../assets/login-logo.svg';
import candidateSearch from '../assets/candidate-search.svg';

import FormInput from '../components/FormInput/FormInput';
import {auth} from '../firebase/firebase.utils';
import {AuthContext} from '../components/Auth/Auth';

const LoginCard = styled.div`
  padding: 80px 80px 40px 80px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.22);
`;

const Login = ({history}) => {
  const [authUser, setAuthUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = authUser;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setAuthUser({email: '', password: ''});
      history.push('/dashboard');
    } catch (err) {}
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setAuthUser({...authUser, [name]: value});
  };

  const {user} = useContext(AuthContext);

  if (user.currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container-fluid" style={{height: '100vh', overflow: 'hidden'}}>
      <div className="d-flex row mt-5" style={{height: '90vh'}}>
        <div className="d-lg-block d-none col-lg-6 col-12 text-center">
          <img className="img-fluid" src={loginLogo} alt="" />
          <img className="py-5 img-fluid" src={candidateSearch} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-between col-lg-6 col-12 text-center">
          <h2 className="text-primary">Welcome Back</h2>
          <LoginCard>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={authUser.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <FormInput
                  type="password"
                  id="password"
                  name="password"
                  value={authUser.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-block btn btn-lg btn-primary">
                Login
              </button>
            </form>
          </LoginCard>
          <p style={{color: '#7A869A'}}>
            Copyrights © 2020. This is an internal application of Padink Engineering
            Services Pvt Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
