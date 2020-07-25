/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Trash from '../assets/trash.svg';
import Layout from '../components/Layout/Layout';
import FormInput from '../components/FormInput/FormInput';
import CreatableInputOnly from '../components/SkillSelect';
import ToggleSwitch from '../components/toggleSwitch';
import validate from '../components/formValid/loginFormValidationRules';
import {firestore} from '../firebase/firebase.utils';
import PersonalDetail from './PersonalDetail';
import wpForm from '../assets/wpForm.svg';
import cloud from '../assets/cloud.svg';
import done from '../assets/done.svg';

const Experience = (props) => {
  const context = useContext(PersonalDetail);

  useEffect(() => {
    console.log(context);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    softwareSkill: '',
    // resumeEditor: '',
    presentEmployerFrom: '',
    presentEmployerDesignation: '',
    presentCompanyName: '',
    pastEmployerFrom: '',
    pastEmployerTo: '',
    pastEmployerDesignation: '',
    pastEmployerCompanyName: '',
  });

  const [jobDetails, setJobDetails] = useState([
    {
      text: '',
    },
  ]);
  const [tasks, setTasks] = useState([
    {
      text: '',
    },
  ]);

  const removeDetails = (index) => {
    const newJobDetails = [...jobDetails];
    newJobDetails.splice(index, 1);
    setJobDetails(newJobDetails);
  };
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

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
  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const history = useHistory();
  const routeChange = () => {
    const path = `/dashboard/upload_resume`;
    history.push(path);
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
                  <a style={{backgroundColor: '#0747A6'}}>
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
        <form onSubmit={handleSubmit} noValidate>
          <div className="container pt-5">
            <div className="card h-5 " style={{border: 'none'}}>
              <div className="card-body ">
                <p className="h4" style={{color: '#172B4D'}}>
                  Add Work Experience
                </p>
                <p className="h6 pt-4" style={{color: '#7A869A'}}>
                  Software skills
                </p>
                <div className="col-md-4 pl-0">
                  <CreatableInputOnly name="softwareSkill" />
                </div>
                <p className="h6 pt-5" style={{color: '#7A869A'}}>
                  Projects Experience
                </p>
                <CKEditor
                  editor={ClassicEditor}
                  className="form-control"
                  onInit={(editor) => {
                    console.log('Editor is ready to use!', editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({event, editor, data});
                  }}
                />
                />
                <div className="pt-4">
                  <span style={{color: '#7A869A'}}> Corrently Employed</span>
                  <ToggleSwitch />
                  <h6 className="pt-3" style={{color: '#172B4D'}}>
                    Present Employer Detail
                  </h6>
                  <div className="form-row ">
                    <div className="col-md-3 ">
                      <p className="FormHeadingColor">
                        From
                        <span className="required text-danger">*</span>
                      </p>
                      <FormInput
                        type="date"
                        className={`form-control ${
                          errors.presentEmployerFrom ? 'errorBorder' : null
                        }`}
                        placeholder=" "
                        name="presentEmployerFrom"
                        value={values.presentEmployerFrom}
                        onChange={handleChange}
                      />
                      {errors.presentEmployerFrom && (
                        <p className="text-danger">{errors.presentEmployerFrom}</p>
                      )}
                    </div>
                    <div className="col-md-5 ">
                      <p className="FormHeadingColor">
                        Designation
                        <span className="required text-danger">*</span>
                      </p>
                      <FormInput
                        type="text"
                        className={`form-control ${
                          errors.presentEmployerDesignation ? 'errorBorder' : null
                        }`}
                        placeholder=" "
                        name="presentEmployerDesignation"
                        value={values.presentEmployerDesignation}
                        onChange={handleChange}
                        required
                      />
                      {errors.presentEmployerDesignation && (
                        <p className="text-danger">{errors.presentEmployerDesignation}</p>
                      )}
                    </div>
                  </div>
                  {'\n'}
                  <div>
                    <p className="FormHeadingColor pt-3">
                      Company Name
                      <span className="required text-danger">*</span>
                    </p>
                    <FormInput
                      className={`form-control w-50 ${
                        errors.presentCompanyName ? 'errorBorder' : null
                      }`}
                      type="text"
                      placeholder=" "
                      name="presentCompanyName"
                      value={values.presentCompanyName}
                      onChange={handleChange}
                      required
                    />
                    {errors.presentCompanyName && (
                      <p className="text-danger">{errors.presentCompanyName}</p>
                    )}
                  </div>
                  <h6 className="pt-3" style={{color: '#172B4D'}}>
                    Past Employer Detail
                  </h6>
                  <div className="form-row">
                    <div className="col-md-3">
                      <p className="FormHeadingColor">From</p>
                      <FormInput
                        type="date"
                        className="form-control"
                        placeholder=" "
                        name="pastEmployerFrom"
                        value={values.pastEmployerFrom}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-3">
                      <p className="FormHeadingColor">To</p>
                      <FormInput
                        type="date"
                        className="form-control"
                        name="pastEmployerTo"
                        value={values.pastEmployerTo}
                        onChange={handleChange}
                        placeholder=" "
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <p className="FormHeadingColor">Designation</p>
                      <FormInput
                        type="text "
                        className="form-control"
                        name="pastEmployerDesignation"
                        placeholder=" "
                        value={values.pastEmployerDesignation}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <p className="FormHeadingColor pt-3">Company Name</p>
                    <FormInput
                      type="text"
                      placeholder=" "
                      className="form-control"
                      name="pastEmployerCompanyName"
                      value={values.pastEmployerCompanyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col pt-3 pl-md-0" style={{borderRadius: '6px'}}>
                    <button type="button" className="btn btn-primary button-size">
                      Add
                    </button>
                  </div>
                  <div className="pt-1 table-responsive-sm table-hover">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">From</th>
                          <th scope="col">To</th>
                          <th scope="col">Designation</th>
                          <th scope="col">Company Name</th>
                        </tr>
                      </thead>

                      <tbody>
                        {jobDetails.map((jobDetails, index) => (
                          <tr>
                            <td>{values.presentEmployerFrom}</td>
                            <td>Present</td>
                            <td>{values.presentEmployerDesignation}</td>
                            <td>{values.presentCompanyName}</td>
                            <td>
                              <img
                                src={Trash}
                                alt="delete"
                                onClick={(jobDetails) => removeDetails(index)}
                              />
                            </td>
                          </tr>
                        ))}
                        {tasks.map((task, index) => (
                          <tr>
                            <td>{values.pastEmployerFrom}</td>
                            <td>{values.pastEmployerTo}</td>
                            <td>{values.pastEmployerDesignation}</td>
                            <td>{values.pastEmployerCompanyName}</td>
                            <td>
                              <img
                                src={Trash}
                                alt="delete"
                                onClick={(task) => removeTask(index)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col text-right pt-3 ">
            <button
              type="submit"
              path="/upload_resume"
              className="btn btn-primary"
              onClick={routeChange}
            >
              Continue
            </button>
          </div>
          <div className="col pt-3 " />
        </form>
      </Layout>
    </div>
  );
};
export default Experience;
