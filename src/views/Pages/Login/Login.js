import React, { Component } from 'react';
//import { hashHistory } from 'react-router';
import { Form } from 'formsy-react';

import Input from '../../../components/InputLogin';



import AlertContainer from 'react-alert';

class Login extends Component {
  constructor(props){
    super(props);
    this.alertOptions = {
      offset: 50,
      position: 'top right',
      theme: 'dark',
      time: 0,
      transition: 'scale'
    };
    this.state = {canSubmit : false};
  }

  submit(data) {
    console.log(data);
    alert(JSON.stringify(data, null, 4));
     this.msg.show('Client has been updated successfully', {
      type: 'success',
      time: 3000,
    });

     setTimeout(function() {
      //hashHistory.push('/clients');
    }, 3000);

  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }


  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}  method="post">
                    <p className="text-muted">Sign In to your account</p>

                    <Input name="email" title="Email Address" placeholder="email@example.com" validations="isEmail" validationError="This is not a valid email" required autocomplete="off" labelClass="icon-user" />

                    <Input name="password" type="password" title="Password" placeholder=""  required  validations={{ minLength: 5, maxLength: 15}}  validationErrors={{minLength: 'Enter Password between 5-15 characters',maxLength: "Enter Password between 5-15 characters"}} labelClass="icon-lock"  />

                    <div className="row">
                      <div className="col-6">
                        <button type="submit" className="btn btn-primary px-2" disabled={!this.state.canSubmit}>Login</button>
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
    );
  }
}

export default Login;
