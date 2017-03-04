import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';//browserHistory
import { Form } from 'formsy-react';


import FormInput from '../../../components/Input';
import FormTextarea from '../../../components/Textarea';
import FormSwitch from '../../../components/Switch';
import Comments from '../../../views/Trainers/Detail/Comments';

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

    //var transitionTo = Router.transitionTo;
    this.state = {canSubmit : false};

  }


  submit(data) {
    console.log(data);
    alert(JSON.stringify(data, null, 4));
     this.msg.show('Article has been added successfully', {
      type: 'success',
      time: 3000,
    });

     setTimeout(function() {
      browserHistory.push('/article');
    }, 3000);

  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  showAlert(){
    this.msg.show('Article has been added successfully', {
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
                                <strong>Add Article</strong>
                            </div>
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        <Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} className="mt-1" encType="multipart/form-data" method="post">
                                            <FormInput name="title" title="Article Title / URL" placeholder="Title or https://www.youtube.com/watch?v=pD1MP4YjunQ"  validations={{isWords:true, minLength: 5, maxLength: 100}} required validationErrors={{isWords:'Enter only a-z',minLength: 'Enter atleast 3 characters',maxLength: "No more than 100 characters allowed"}} />
                                            <FormTextarea name="about" title="Details" placeholder=""  />
                                            <FormInput name="image" title="Article Image" type="file" />

                                            <FormSwitch name="stataus" title="Status" value="1" />

                                            <div className="form-group row">
                                                <label className="col-md-3 form-control-label"></label>
                                                <div className="col-md-9">
                                                    <button type="submit" className="btn btn-md btn-primary mr-1" disabled={!this.state.canSubmit}><i className="fa fa-dot-circle-o"></i> Submit</button>
                                                    <Link to={'/article'} className="btn btn-md btn-danger goBack"><i className="fa fa-ban"></i> Cancel </Link>
                                                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <strong>Comments (5)</strong>
                            </div>
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Comments />
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
