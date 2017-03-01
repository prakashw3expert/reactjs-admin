import React from 'react';
import Formsy from 'formsy-react';

const MySwitch = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue((event.currentTarget['checked'] === true) ? 1 : 0);
  },
  render() {

    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = 'form-group row' + (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'has-danger'  : '');

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <label htmlFor={this.props.name} className="col-md-3 form-control-label text-right">{this.props.title}</label>
        <div className="col-md-9">
          <label className="switch switch-3d switch-primary">
          <input type="checkbox" id="{props.name}" name={this.props.name}  className="switch-input" defaultChecked onChange={ this.changeValue }/>
          <span className="switch-label"></span>
          <span className="switch-handle"></span>
          </label>
          <span className='help-block text-danger'>{errorMessage}</span>
        </div>
      </div>
    );
  }
});

export default MySwitch;