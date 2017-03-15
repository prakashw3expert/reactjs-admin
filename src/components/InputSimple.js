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

    return (
          <input
            type={this.props.type || 'text'}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.changeValue}
            value={this.getValue() ? this.getValue() : ''}
            className="form-control"
            checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
          />
    );
  }
});

export default MyInput;
