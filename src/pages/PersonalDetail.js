import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import FormInput from '../components/FormInput/FormInput';
import validate from '../components/formValid/loginFormValidationRules';
import wpForm from '../assets/wpForm.svg';
import cloud from '../assets/cloud.svg';
import done from '../assets/done.svg';

const PersonalDetail = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const routeChange = () => {
    const path = `/dashboard/experience`;
    history.push(path);
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const [values, setValues] = useState({
    fullName: '',
    dob: '',
    mobile: '',
    email: '',
    city: '',
    country: '',
    address: '',
    qualifications: '',
    tenth_mark: '',
    tenth_year: '',
    institution_tenth: '',
    twelth_mark: '',
    twelth_year: '',
    institution_twelth: '',
    total_experience: '',
    notice_period: '',
    department: '',
  });

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(values);

  return (
    <div>
      <Layout>
        <div className="container col pt-5">
          <div className="card" style={{border: 'none'}}>
            <div className="card-body">
              <nav className="nav nav-pills flex-column flex-sm-row hoverDes py-2">
                <li className="flex-sm-fill text-sm-center nav-link ">
                  <a style={{backgroundColor: '#0747A6'}}>
                    <img src={wpForm} />
                  </a>
                  <span className="col-sm topManualEntry" style={{color: '#cccccc'}}>
                    FIRST STEP
                  </span>
                  <p className="col-sm topManualEntry">Person Details</p>
                </li>
                <li className="flex-sm-fill text-sm-center nav-link hoverDes">
                  <a>
                    <img src={wpForm} />
                  </a>
                  <span className="col-sm topManualEntry" style={{color: '#cccccc'}}>
                    SECOND STEP
                  </span>
                  <p className="col-sm topManualEntry">Experience</p>
                </li>
                <li className="flex-sm-fill text-sm-center nav-link hoverDes">
                  <a>
                    <img src={cloud} />
                  </a>
                  <span className="col-sm topManualEntry" style={{color: '#cccccc'}}>
                    THIRD STEP
                  </span>
                  <p className="col-sm topManualEntry">Upload Resume</p>
                </li>
                <li className="flex-sm-fill text-sm-center nav-link hoverDes">
                  <a>
                    <img src={done} />
                  </a>
                  <span className="col-sm topManualEntry" style={{color: '#cccccc'}}>
                    FOURTH STEP
                  </span>
                  <p className="col-sm  topManualEntry">Conformation</p>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="container pt-5 ">
          <form onSubmit={handleSubmit} noValidate>
            <div className="card h-5" style={{border: 'none'}}>
              <div className="card-body">
                <p className="h4">Add Candidate Details</p>
                <div className="pt-2 namePersonal">
                  <p className="FormHeadingColor">
                    Full Name
                    <span className="required text-danger">*</span>
                  </p>
                  <div className="control">
                    <FormInput
                      autoComplete="on"
                      className={`form-control ${errors.fullName ? 'errorBorder' : null}`}
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                      value={values.fullName}
                      required
                    />
                    {errors.fullName && <p className="text-danger">{errors.fullName}</p>}
                  </div>
                </div>
                <div className="form-row pt-3">
                  <div className="col-md-3 ">
                    <p className="FormHeadingColor">
                      DOB
                      <span className="required text-danger">*</span>
                    </p>
                    <FormInput
                      type="date"
                      className={`form-control ${errors.dob ? 'errorBorder' : null}`}
                      placeholder=" "
                      name="dob"
                      value={values.dob}
                      onChange={handleChange}
                      required
                    />
                    {errors.dob && <p className="text-danger">{errors.dob}</p>}
                  </div>
                  <div className="col-md-3 pl-md-5 ">
                    <p className="FormHeadingColor">
                      Mobile
                      <span className="required text-danger">*</span>
                    </p>

                    <FormInput
                      type="tel"
                      className={`form-control ${errors.mobile ? 'errorBorder' : null}`}
                      placeholder=" "
                      name="mobile"
                      value={values.mobile}
                      onChange={handleChange}
                      required
                    />
                    {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
                  </div>
                  <div className="col-md-3 pl-md-5 ">
                    <p className="FormHeadingColor">
                      E-Mail
                      <span className="required text-danger">*</span>
                    </p>
                    <FormInput
                      type="email"
                      class={`form-control ${errors.email ? 'errorBorder' : null}`}
                      placeholder=" "
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                  </div>
                </div>

                <div className="form-row pt-3 ">
                  <div className="col-md-3 ">
                    <p className="FormHeadingColor">
                      country
                      <span className="required text-danger">*</span>
                    </p>
                    <select
                      id="inputState"
                      className="form-control"
                      value={values.country}
                      onChange={handleChange}
                      required
                    >
                      <option value={'india'}>India</option>
                      <option value={'america'}>America</option>
                      <option value={'uae'}>UAE</option>
                    </select>
                  </div>
                  <div className="col-md-3 pl-md-5 ">
                    <p className="FormHeadingColor">
                      City
                      <span className="required text-danger">*</span>
                    </p>
                    <FormInput
                      type="text "
                      class={`form-control ${errors.email ? 'errorBorder' : null}`}
                      placeholder=" "
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      required
                    />
                    {errors.city && <p className="text-danger">{errors.city}</p>}
                  </div>
                  <div className="col-md-3 pl-md-5 ">
                    <p className="FormHeadingColor">
                      Address
                      <span className="required text-danger">*</span>
                    </p>
                    <FormInput
                      type="text "
                      className={`form-control ${errors.email ? 'errorBorder' : null}`}
                      placeholder=" "
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      required
                    />
                    {errors.address && <p className="text-danger">{errors.address}</p>}
                  </div>
                </div>
                {/* qualification division */}
                <div className="pt-5 ">
                  <p className="h4 ">Educational Qualification</p>
                  {'\n'}
                  <div className="form-row pt-4">
                    <div className="col-md-3 ">
                      <p className="FormHeadingColor pt-1">
                        Select Qualification
                        <span className="required text-danger">*</span>
                      </p>
                      <select
                        id="inputState"
                        className="form-control"
                        value={values.qualifications}
                        onChange={handleChange}
                        required
                      >
                        <option>Bachelor of Engineering</option>
                        <option>M.sc</option>
                        <option>B.sc</option>
                      </select>
                    </div>
                    <div className="col-md-3 pt-6 pl-md-4">
                      <button type="button" className="btn btn-primary ">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="form-row ">
                    <div className="col-md-3 ">
                      <p className="FormHeadingColor ">
                        10
                        <sup>th</sup>
                        <span className="required text-danger">*</span>
                      </p>
                      <FormInput
                        type="number"
                        className={`form-control ${
                          errors.tenth_mark ? 'errorBorder' : null
                        }`}
                        placeholder=" "
                        name="tenth_mark"
                        value={values.tenth_mark}
                        onChange={handleChange}
                        required
                      />
                      {errors.tenth && <p className="text-danger">{errors.tenth_mark}</p>}
                    </div>
                    <div className="col-md-3 pl-md-5 ">
                      <p className="FormHeadingColor">
                        Year
                        <span className="required text-danger">*</span>
                      </p>
                      <FormInput
                        type="number"
                        className="form-control "
                        placeholder=" "
                        name="tenth_year"
                        value={values.tenth_year}
                        onChange={handleChange}
                        required
                      />
                      {errors.tenth_year && (
                        <p className="text-danger">{errors.tenth_year}</p>
                      )}
                    </div>
                    <div className="col-md-5 pl-md-5 ">
                      <p className="FormHeadingColor">
                        Institution Name
                        <span className="required text-danger">*</span>
                      </p>
                      <FormInput
                        type="text "
                        className="form-control "
                        placeholder=" "
                        name="institution_tenth"
                        value={values.institution_tenth}
                        onChange={handleChange}
                        required
                      />
                      {errors.institution_tenth && (
                        <p className="text-danger">{errors.institution_tenth}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="form-row ">
                    <div className="col-md-3 ">
                      <p className="FormHeadingColor">
                        12
                        <sup>th</sup>
                        <span className="required text-danger">*</span>
                      </p>
                      <FormInput
                        type="number"
                        className="form-control"
                        placeholder=" "
                        name="twelth_mark"
                        value={values.twelth_mark}
                        onChange={handleChange}
                        required
                      />
                      {errors.twelth_mark && (
                        <p className="text-danger">{errors.twelth_mark}</p>
                      )}
                    </div>
                    <div className="col-md-3 pl-md-5 ">
                      <p className="FormHeadingColor">
                        Year
                        <span className="required " style={{color: '#ff0000 '}}>
                          *
                        </span>
                      </p>
                      <FormInput
                        type="number"
                        className="form-control "
                        placeholder=" "
                        name="twelth_year"
                        value={values.twelth_year}
                        onChange={handleChange}
                        required
                      />
                      {errors.twelth_year && (
                        <p className="text-danger">{errors.twelth_year}</p>
                      )}
                    </div>
                    <div className="col-md-5 pl-md-5 ">
                      <p className="FormHeadingColor">
                        Institution Name
                        <span className="required " style={{color: '#ff0000 '}}>
                          *
                        </span>
                      </p>
                      <FormInput
                        type="text"
                        className="form-control "
                        placeholder=" "
                        name="institution_twelth"
                        value={values.institution_twelth}
                        onChange={handleChange}
                        required
                      />
                      {errors.institution_twelth && (
                        <p className="text-danger">{errors.institution_twelth}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <p className="h4 ">Work Related</p>
                  <div className="form-row pt-4">
                    <div className="col-md-3 ">
                      <p className="FormHeadingColor">
                        Total Experience
                        <span className="required text-danger">*</span>
                      </p>
                      <FormInput
                        type="number"
                        className="form-control "
                        placeholder=" "
                        name="total_experience"
                        value={values.total_experience}
                        onChange={handleChange}
                        required
                      />
                      {errors.total_experience && (
                        <p className="text-danger">{errors.total_experience}</p>
                      )}
                    </div>
                    <div className="col-md-3 pl-md-5 ">
                      <p className="text-muted ">Notice Period</p>
                      <FormInput
                        type="number"
                        className="form-control "
                        placeholder=" "
                        name="notice_period"
                        value={values.notice_period}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-3 pl-md-5 ">
                      <p className="FormHeadingColor">Department</p>
                      <FormInput
                        type="text"
                        className="form-control "
                        placeholder=" "
                        name="department"
                        value={values.department}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col text-right pt-3 ">
              <button type="submit" className="btn btn-primary" onClick={routeChange}>
                Continue
              </button>
            </div>
          </form>
        </div>
        <div className="col  pt-md-3 " />
      </Layout>
    </div>
  );
};

export default PersonalDetail;
