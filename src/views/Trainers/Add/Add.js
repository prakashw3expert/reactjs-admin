import React, {Component} from 'react';
import { Link, hashHistory } from 'react-router';//browserHistory
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form } from 'formsy-react';


import FormInput from '../../../components/Input';
import FormTextarea from '../../../components/Textarea';
import FormSwitch from '../../../components/Switch';
import FormSelect from '../../../components/Select';

import AlertContainer from 'react-alert';

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

    this.state = {
      modal: false,
      training: false,
      canSubmit : false,
      countries : [{'key' : '1','title' : 'Country'}]
    };

    this.toggle = this.toggle.bind(this);
    this.toggleService= this.toggleService.bind(this);
    //var transitionTo = Router.transitionTo;

  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleService() {
    this.setState({
      training: !this.state.training
    });
  }

  submit(data) {
    console.log(data);
    alert(JSON.stringify(data, null, 4));
     this.msg.show('Client has been updated successfully', {
      type: 'success',
      time: 3000,
    });

     setTimeout(function() {
      hashHistory.push('/trainers');
    }, 3000);

  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  showAlert(){
    this.msg.show('Client has been updated successfully', {
      type: 'success',
     // icon: <img src="path/to/some/img/32x32.png" />
    });
  }

  render() {
    return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong> {this.props.action === 'edit' ? 'Profile Details' : 'Add Trainer'}</strong>
                            </div>
                            <div className="card-block">
                                <div className="row">
                                    {this.props.action === 'edit' ? '' : <div className="col-md-2"></div> }
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        <Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} className="mt-1" encType="multipart/form-data" method="post">
                                            <FormInput name="name" title="Name" placeholder="email@example.com"  validations={{isWords:true, minLength: 5, maxLength: 100}} required validationErrors={{isWords:'Enter only a-z',minLength: 'Enter atleast 3 characters',maxLength: "No more than 100 characters allowed"}} />
                                            <FormInput name="email" title="Email Address" placeholder="email@example.com" validations="isEmail" validationError="This is not a valid email" required autocomplete="off" />
                                            <FormInput name="phone" title="Phone Number" required validations={{isInt: true,isLength: 10}} validationErrors={{isInt : "You have not type valid phone number.", isLength : "Enter 10 digits mobile numbers."}}/>

                                            {this.props.action === 'edit' ? '' : <FormInput name="password" type="password" title="Password" placeholder=""  required  validations={{ minLength: 5, maxLength: 15}}  validationErrors={{minLength: 'Enter Password between 5-15 characters',maxLength: "Enter Password between 5-15 characters"}}  />}
                                            {this.props.action === 'edit' ? '' : <FormInput name="confirm_password" type="password" title="Confirm Password" placeholder="" validations="equalsField:password" required validationError="Password and confirm password do not match." />}



                                            <FormInput name="address" title="Address" placeholder="" required />
                                            <FormInput name="city" title="City" placeholder="" required />
                                            <FormInput name="postal_code" title="Postal Code" placeholder="" required />
                                            <FormSelect name="country" title="Country" placeholder="" required options={this.state.countries} />
                                            <FormTextarea name="about" title="About" placeholder=""  />
                                            <FormInput name="image" title="Profile Image" type="file" />

                                            <div className="form-group row">
                                                <label className="col-md-3 form-control-label text-right">Gym</label>
                                                <div className="col-md-9">
                                                    <Button onClick={this.toggle} type="button" className="btn btn-outline-primary mr-h">Block Londom Gym <div className="text-muted mt-q"><span>5S5 3SS</span></div></Button>
                                                    <Button onClick={this.toggle} type="button" className="btn btn-outline-primary mr-h">Globle Gym <div className="text-muted mt-q"><span>5S5 3B6</span></div></Button>
                                                    <br/>
                                                    <Button onClick={this.toggle} type="button" className="btn btn-outline-primary active mt-q">Add Gym</Button>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 form-control-label text-right">Trainings</label>
                                                <div className="col-md-9">
                                                    <Button onClick={this.toggleService} type="button" className="btn btn-outline-success mr-h">Yogo</Button>
                                                    <Button onClick={this.toggleService} type="button" className="btn btn-outline-success mr-h">Cycling</Button>

                                                    <Button onClick={this.toggleService} type="button" className="btn btn-outline-success active">Add Traning</Button>
                                                </div>
                                            </div>


                                            <FormSwitch name="appointment_notification" title="Notification" value="1" />
                                            <FormSwitch name="geolocation" title="Geolocation" value="1" />
                                            <FormSwitch name="stataus" title="Status" value="1" />

                                            <div className="form-group row">
                                                <label className="col-md-3 form-control-label"></label>
                                                <div className="col-md-9">
                                                    <button type="submit" className="btn btn-md btn-primary mr-1" disabled={!this.state.canSubmit}><i className="fa fa-dot-circle-o"></i> Submit</button>
                                                    {this.props.action === 'edit' ? '' : <Link to={'/trainers'} className="btn btn-md btn-danger goBack"><i className="fa fa-ban"></i> Cancel </Link> }
                                                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

                                                </div>
                                            </div>
                                        </Form>
                                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                          <ModalHeader toggle={this.toggle}>Add Gym</ModalHeader>
                                          <ModalBody>
                                            <Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} className="mt-1" encType="multipart/form-data" method="post">
                                                <FormInput name="name" title="Gym Name" />
                                                <FormInput name="zipcode" title="Postal Code" />
                                            </Form>

                                          </ModalBody>
                                          <ModalFooter>
                                            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
                                            <Button color="danger" onClick={this.toggle} >Delete</Button>
                                          </ModalFooter>
                                        </Modal>

                                        <Modal isOpen={this.state.training} toggle={this.toggleService} className={this.props.className}>
                                          <ModalHeader toggle={this.toggleService}>Tranings</ModalHeader>
                                          <ModalBody>
                                          <Button  type="button" className="btn btn-outline-success mr-h mt-h active">Yogo</Button>
                                          <Button  type="button" className="btn btn-outline-success mr-h mt-h">Power Yoga</Button>
                                          <Button  type="button" className="btn btn-outline-success mr-h mt-h">Aerobic</Button>
                                          <Button  type="button" className="btn btn-outline-success mr-h mt-h">Running</Button>
                                          <Button  type="button" className="btn btn-outline-success mr-h mt-h">Climbing</Button>
                                          <Button  type="button" className="btn btn-outline-success mr-h mt-h">Jumping</Button>
                                          <Button  type="button" className="btn btn-outline-success mr-h mt-h">Climbing</Button>
                                          <Button  type="button" className="btn btn-outline-success mr-h mt-h active">Cycling </Button>

                                          </ModalBody>
                                          <ModalFooter>
                                            <Button color="primary" onClick={this.toggleService}>Update</Button>
                                            <Button color="danger" onClick={this.toggleService} >Cancel</Button>
                                          </ModalFooter>
                                        </Modal>

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
