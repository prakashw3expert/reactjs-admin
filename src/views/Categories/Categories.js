import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Form } from 'formsy-react';
import FormInput from '../../components/Input';
import FormSwitch from '../../components/Switch';

class Categories extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      modal: false,
      dropdownOpen: false,
      categories : [
          {"id":"436000001","name":"Power Yoga","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
          {"id":"436000002","name":"Aerobic","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
          {"id":"436000003","name":"Cycling","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
          {"id":"436000004","name":"Running","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
          {"id":"436000005","name":"Climbing","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
          {"id":"436000006","name":"Jumping","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
          {"id":"436000007","name":"Climbing","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
      ]
    };

    //this.toggleAdd = this.toggle.bind(this);
  }




  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }



  render() {
    var avaibility = [];
      var that = this;
    this.state.categories.forEach(function(sche, key) {
      avaibility.push(<ListSchedule data={sche}  onCategoryEdit={that.toggle} key={key}/> );
    });

    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                Categories List
                <Button  onClick={this.toggle} type="button" className="btn btn-outline-primary btn-sm pull-right"><i className="fa fa-plus"></i> Add New Category </Button>
              </div>
              <div className="card-block">
                <table className="table table-hover table-outline mb-0 hidden-sm-down">
                  <thead className="thead-default">
                    <tr>
                      <th>Category ID</th>
                      <th>Category Name</th>
                      <th>Added Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {avaibility}
                  </tbody>
                </table>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Add Category</ModalHeader>
                  <ModalBody>
                    <Form  className="mt-1" encType="multipart/form-data" method="post">
                        <FormInput name="name" title="Category" />
                        <FormSwitch name="stataus" title="Status" value="1" />
                    </Form>

                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Save</Button>
                    <Button color="danger" onClick={this.toggle} >Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

var ListSchedule = React.createClass({
    handleCategoryEdit: function() {
      this.props.onCategoryEdit( this.props.data );
      return false;
    },
    render: function() {
      return (
        <tr>
          <td className="text-left">{this.props.data.id}
          </td>

          <td>
            <div>
              {this.props.data.name}
            </div>
          </td>
          <td>
            <div>
              {this.props.data.created}
            </div>
          </td>

          <td>
            Active
          </td>
          <td>
          <div>
              <Button  onClick={this.handleCategoryEdit} type="button" className="btn btn-link btn-sm mr-q"><i className="fa fa-pencil"  aria-hidden="true"></i> </Button>
              <a href="#" onClick={this.handleClientRemove}><i className="fa fa-times" aria-hidden="true"></i></a>
          </div>
          </td>
        </tr>

        );
    }
});

export default Categories;
