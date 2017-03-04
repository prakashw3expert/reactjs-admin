import React, { Component } from 'react';
import { Link } from 'react-router';
import Formsy from 'formsy-react';


class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Prakas saini'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong>Add Client</strong>
              </div>
                <div className="card-block">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                            <form onSubmit={this.handleSubmit} className="form-horizontal ">
                                <FormInput name="name" label="Name" placeholder="Jerry Wood "  value={this.state.name} onChange={this.handleChange} />
                                <FormInput name="email" label="Email Address" placeholder="email@example.com"/>
                                <FormInput name="phone" label="Phone Number" placeholder="+44 9999 999 888"/>
                                <FormInput name="password" label="Password" placeholder=""/>
                                <FormInput name="verify_password" label="Verify Password" placeholder=""/>
                                <FormTextarea name="about" label="About" placeholder="Tell About You"/>
                                <FormInput name="address" label="Location" placeholder=""/>
                                <FormInput name="postal_code" label="Postal Code" placeholder=""/>
                                <FormCheckbox name="appointment_notification" label="Notification" />
                                <FormCheckbox name="geolocation" label="Geolocation" />
                                <FormCheckbox name="stataus" label="Status" />
                                
                                <div className="form-group row">
                                    <label className="col-md-3 form-control-label"></label>
                                    <div className="col-md-9">
                                        <button type="submit" className="btn btn-md btn-primary mr-1"><i className="fa fa-dot-circle-o"></i> Submit</button>
                                        <Link to={'/clients/list'} className="btn btn-md btn-danger"><i className="fa fa-ban"></i> Cancel </Link>
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function FormInput(props){
    return (
        <div className="form-group row">
            <label className="col-md-3 form-control-label text-right">{props.label}</label>
            <div className="col-md-9">
                <input type="text"  name={props.name} className="form-control" placeholder={props.placeholder}  value={props.value} onChange={props.onChange} />
                
            </div>
        </div>
    );
}

function FormTextarea(props){
    return (
        <div className="form-group row">
            <label className="col-md-3 form-control-label text-right">{props.label}</label>
            <div className="col-md-9">
                <textarea id="{props.name}" name="{props.name}" rows="9" className="form-control" placeholder={props.placeholder}></textarea>
            </div>
        </div>
    );
}

function FormCheckbox(props){
    return (
         

        <div className="form-group row">
            <label className="col-md-3 form-control-label text-right">{props.label}</label>
            <div className="col-md-9">
                <label className="switch switch-3d switch-primary">
                    <input type="checkbox" id="{props.name}" name={props.name}  className="switch-input" defaultChecked/>
                    <span className="switch-label"></span>
                    <span className="switch-handle"></span>
                </label>
            </div>
        </div>
    );
}

export default Forms;
