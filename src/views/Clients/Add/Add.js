import React, {Component} from 'react';
import { Link, hashHistory } from 'react-router';//browserHistory
import { Form } from 'formsy-react';


import FormInput from '../../../components/Input';
import FormTextarea from '../../../components/Textarea';
import FormSwitch from '../../../components/Switch';
// import FormSelect from '../../../components/Select';

import AlertContainer from 'react-alert';

import AppConfig from  "../../../Config/AppConfig"
import * as axios from 'axios'



class Forms extends Component {
    constructor(props){
    super(props);
    this.alertOptions = {
      offset: 50,
      position: 'top right',
      theme: 'dark',
      time: 0,
      transition: 'scale'
    };

    //var transitionTo = Router.transitionTo;
    this.state = {canSubmit : false,countries : [{'key' : '1','title' : 'Country'}]};

  }

  componentWillMount () {
    var pathname = this.props.client;
    if(pathname){
      pathname = pathname.split('/');
      var clientId = pathname[3];
      axios.get(AppConfig.ApiUrl + "users/" + clientId + "?access_token="+localStorage.ptspotter_accessToken)
      .then(res => {
          this.setState(res.data)

      })
    }

  }

  componentDidMount () {
    console.log(this.state);

  }

  submit(data) {
    data.role = 'client';
    data.adminAction = true;
    var clientId = this.state.id;
    if(clientId){
        this.updateProfile(clientId, data)
    }
    else {
      this.createClient(data)
    }



  }

  createClient(modelData) {
    var _this = this;
    axios.post(AppConfig.ApiUrl + "users/?access_token="+localStorage.ptspotter_accessToken, modelData)
    .then(res => {
          this.msg.show('Client has been created successfully', {
           type: 'success',
           time: 3000,
         });
        console.log("Data data",res.data)
        hashHistory.push('/clients');
    })
    .catch(function (error) {

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        var errorMessage = error.response.data.error.message;
      console.log(errorMessage);
        _this.msg.show(errorMessage, {
         type: 'error',
         time: 6000,
       });

      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });
  }


  updateProfile(clientId, modelData) {
    var _this = this;
    axios.patch(AppConfig.ApiUrl + "users/" + clientId + "?access_token="+localStorage.ptspotter_accessToken, modelData)
    .then(res => {
          this.msg.show('Client has been updated successfully', {
           type: 'success',
           time: 3000,
         });
        console.log("Data data",res.data)
        hashHistory.push('/clients');
    })
    .catch(function (error) {

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        var errorMessage = error.response.data.error.message;
        _this.msg.show(errorMessage, {
         type: 'error',
         time: 6000,
       });

      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }



  render() {
    return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong>{(this.props.action === 'edit') ? "Edit Client" : 'Add Client'}</strong>
                            </div>
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        <Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} className="mt-1" encType="multipart/form-data" method="post">
                                            <FormInput name="name" title="Name" placeholder="email@example.com"  validations={{isWords:true, minLength: 5, maxLength: 100}} required validationErrors={{isWords:'Enter only a-z',minLength: 'Enter atleast 3 characters',maxLength: "No more than 100 characters allowed"}} value={this.state.name} />
                                            <FormInput name="email" title="Email Address" placeholder="email@example.com" validations="isEmail" validationError="This is not a valid email" required autocomplete="off" value={this.state.email} />
                                            <FormInput name="phone" title="Phone Number" required  value={this.state.phone} />

                                            {/*validations={{isInt: true,isLength: 10}} validationErrors={{isInt : "You have not type valid phone number.", isLength : "Enter 10 digits mobile numbers."}}*/}


                                            <FormInput name="password" type="password" title="Password" placeholder=""    validations={{ minLength: 5, maxLength: 15}}  validationErrors={{minLength: 'Enter Password between 5-15 characters',maxLength: "Enter Password between 5-15 characters"}}  />
                                            <FormInput name="confirm_password" type="password" title="Confirm Password" placeholder="" validations="equalsField:password"  validationError="Password and confirm password do not match." />

                                            <FormInput name="address" title="Address" placeholder="" required value={this.state.address}/>
                                            {/*<FormInput name="city" title="City" placeholder="" required />
                                            <FormInput name="postal_code" title="Postal Code" placeholder="" required />
                                            <FormSelect name="country" title="Country" placeholder="" required options={this.state.countries} />*/}

                                            <FormTextarea name="about" title="About" placeholder={this.state.about}  value={this.state.about}/>
                                            <FormInput name="image" title="Profile Image" type="file" />

                                            <FormSwitch name="geolocation" title="Geolocation" value={this.state.geolocation} />
                                            <FormSwitch name="status" title="Status" value={this.state.status} />

                                            <div className="form-group row">
                                                <label className="col-md-3 form-control-label"></label>
                                                <div className="col-md-9">
                                                    <button type="submit" className="btn btn-md btn-primary mr-1" disabled={!this.state.canSubmit}><i className="fa fa-dot-circle-o"></i> Submit</button>
                                                    <Link to={'/clients'} className="btn btn-md btn-danger goBack"><i className="fa fa-ban"></i> Cancel </Link>
                                                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Forms;
