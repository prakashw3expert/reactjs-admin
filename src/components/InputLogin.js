import React from 'react';
import Formsy from 'formsy-react';

const MyInput = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },
  render() {


    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
      <div className="mb-1">
      <div className="input-group">
        <span className="input-group-addon"><i className={this.props.labelClass}></i></span>
          <input
            type={this.props.type || 'text'}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.changeValue}
            value={this.getValue() ? this.getValue() : ''}
            className="form-control"
            checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
          />
      </div>
      <span className='help-block text-danger'>{errorMessage}</span>
      </div>
    );
  }
});

export default MyInput;
