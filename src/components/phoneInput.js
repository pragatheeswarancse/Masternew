import React, {useState} from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function CountryCode() {
  const [value, setValue] = useState();

  return (
    <PhoneInput
      placeholder=""
      type="tel"
      id="phone "
      class="form-control "
      name="mobile"
      value={value}
      onChange={setValue}
    />
  );
}

export default CountryCode;
