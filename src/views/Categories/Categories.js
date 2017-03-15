import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'whatwg-fetch'


import * as Loopback from '../../actions/Loopback'

import { Form } from 'formsy-react';
import FormInput from '../../components/Input';
import InputSimple from '../../components/InputSimple';
import FormSwitch from '../../components/Switch';

import Pagination from "react-js-pagination";

class Categories extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false,
      dropdownOpen: false,
      LoopBack : {
        offset : 0,
        limit : 100
      },
      activePage : 1,
      totolRecords : 1
    };
  }

  componentWillMount(){
    // Get total counts
    var options = this.state.LoopBack;
    this.categories(options);
  }

  categories(filter){
    Loopback.load('categories/count').then((data) => {
      this.setState({'totolRecords': data.count});
    })

    Loopback.load('categories',filter).then((data) => {
      this.setState({'categories': data});
    })
  }


  submit(data){
    var options = this.state.LoopBack;
    options['where'] = '';
    if(data.name){
        options['where']  = {name: {like: data.name}};
    }
    this.categories(options);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handlePageChange(pageNumber) {
    var options = this.state.LoopBack;
    options['offset'] = ((pageNumber - 1) * options['limit']);
    this.categories(options);
    this.setState({activePage: pageNumber});
  }

  render() {
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

              <div className="form-group row">
                <div className="col-9">

                </div>
                <div className="col-3">
                  <Form onSubmit={this.submit.bind(this)}>
                  <InputSimple name="name" placeholder="Search"  />

                  </Form>
                </div>
              </div>

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
                  {this.state.categories ? this.state.categories.map(catetory => (
                      <Category data={catetory}  onCategoryEdit={this.toggle} key={catetory.id.toString()} />
                  )) : ""}
                  </tbody>
                </table>

                <div className="row mt-1">
                  <div className="col-12">
                      <Pagination activePage={this.state.activePage} itemsCountPerPage={this.state.LoopBack.limit} totalItemsCount={this.state.totolRecords} pageRangeDisplayed={5} onChange={this.handlePageChange.bind(this)} />
                  </div>
                </div>



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

var Category = React.createClass({
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
            {this.props.data.status === true ? "Active" : "Deactived"}
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
