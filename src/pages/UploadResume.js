import React, { useCallback, useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';
import { useDropzone } from 'react-dropzone';
import { useHistory } from 'react-router-dom';
import firestore from '../firebase/firebase.utils';
import validate from '../components/formValid/loginFormValidationRules';
import Layout from '../components/Layout/Layout';
import wpForm from '../assets/wpForm.svg';
import cloud from '../assets/cloud.svg';
import done from '../assets/done.svg';

function UploadResume(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

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
  useEffect(() => {
 console.log(props.location)
  }, [])
const {
  isDragActive,
  getRootProps,
  getInputProps,
  isDragReject,
  acceptedFiles,
} = useDropzone({
  onDrop,
  accept: 'application/pdf',
  minSize: 0,
  maxSize: 137826112313,
});

const history = useHistory();

const routeChange = () => {
  const path = `/dashboard/done`;
  history.push({
    pathname: path,
    data: { ...props.location.data,resumeinfo:values },
  });
};
const uniqueId = 'Resume' + uuid();
return (
  <>
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
                <a>
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
        <div className="card dashed">
          <div className="card-body">
            <h6 style={{ color: '#172B4D' }}>Upload Resume</h6>
            <div className="dashed">
              <form onSubmit={handleSubmit} noValidate>
                <div>
                  <p
                    {...getInputProps()}
                    className="text-center pt-5"
                    style={{ color: '#0747A6' }}
                  >
                    {!isDragActive && 'Click here or drop a file to upload!'}
                    {isDragActive && !isDragReject && 'Drop here!'}
                    {isDragReject && 'File type not accepted, sorry!'}
                  </p>
                </div>
                <div {...getRootProps()}>
                  <div className="text-center pb-5">
                    <button type="button" className="btn btn-outline-primary">
                      Choose File
                      </button>
                  </div>
                </div>
                <div>
                  {acceptedFiles.length > 0 &&
                    acceptedFiles.map((acceptedFile) => (
                      <div className="alert alert-success" role="alert">
                        <li>{uniqueId}</li>
                      </div>
                    ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col text-right pt-3 ">
        <button type="button" className="btn btn-primary" onClick={routeChange}>
          Continue
          </button>
      </div>
      <div className="col pt-3 " />
    </Layout>
  </>
);
}

export default UploadResume;
