import React from 'react';

const FormInput = ({handleChange, ...otherProps}) => {
  return (
    <>
      <input onChange={handleChange} className="form-control" {...otherProps} />
    </>
  );
};

export default FormInput;
