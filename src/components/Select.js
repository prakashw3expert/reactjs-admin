import React from 'react';
import Formsy from 'formsy-react';

const MySelect = React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    const className = 'form-group row' + (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '');
    const errorMessage = this.getErrorMessage();

    const options = this.props.options.map((option, i) => (
      <option key={option.title+option.value} value={option.value}>
        {option.title}
      </option>
    ));

    return (
      <div className={className}>
        <label htmlFor={this.props.name} className="col-md-3 form-control-label text-right">{this.props.title}</label>
        <div className="col-md-9">
        <select name={this.props.name} onChange={this.changeValue} value={this.getValue()} className="form-control">
          {options}
        </select>
          <span className='help-block text-danger'>{errorMessage}</span>
        </div>
      </div>
    );
  }

});

export default MySelect;
