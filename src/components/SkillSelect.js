import React, {Component} from 'react';

import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

export default class CreatableInputOnly extends React.Component {
  state = {
    inputValue: '',
    value: [],
  };

  handleChange = (value: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({value});
  };

  handleInputChange = (inputValue) => {
    this.setState({inputValue});
    console.log(inputValue);
  };

  handleKeyDown = (event: SyntheticKeyboardEvent<HTMLElement>) => {
    const {inputValue, value} = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        console.group('Value Added');
        console.log(value);
        console.groupEnd();
        this.setState({
          inputValue: '',
          value: [...value, createOption(inputValue)],
        });
        event.preventDefault();
    }
  };

  render() {
    const {inputValue, value} = this.state;
    console.log(value);
    return (
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        name="SoftwareSkill"
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder=""
        value={value}
      />
    );
  }
}
