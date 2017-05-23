import React, { Component } from 'react';
import { Link } from 'react-router';

import AlertContainer from 'react-alert';

import { connect } from 'react-redux'
import AppConfig from  "../../../Config/AppConfig"
import * as axios from 'axios'
import Moment from 'react-moment';
let localStorage = require('localStorage')


class Clients extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            clientList : []

        };

        this.alertOptions = {
          offset: 50,
          position: 'top right',
          theme: 'dark',
          time: 0,
          transition: 'scale'
        };

    }

    componentDidMount () {
      axios.get(AppConfig.ApiUrl + "users?access_token="+localStorage.ptspotter_accessToken + '&filter[where][role]=client')
      .then(res => {
          this.setState({clientList : res.data})

      })
      .catch(function (error) {
          console.log('Loading Failed');
      });

    }



    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
      });
    }

    handleClientRemove( client ) {
        if(confirm('Delete ? ')) {
            var index = -1;
            var clength = this.state.clientList.length;
            for( var i = 0; i < clength; i++ ) {
                if( this.state.clientList[i].id === client.id ) {
                    index = i;
                    break;
                }
            }
            this.state.clientList.splice( index, 1 );
            this.setState( {clientList: this.state.clientList} );

            axios.delete(AppConfig.ApiUrl + "users/" + client.id + "?access_token="+localStorage.ptspotter_accessToken)
            .then(res => {
                if(res.data.count){
                  this.msg.show(client.name + ' has been deleted successfully', {
                    type: 'success',
                    time: 3000,
                  });
                }

            })
            .catch(function (error) {
                console.log('Loading Failed');
            });

        }
        return false;
    }


    render() {
        return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong>Client Manager</strong>
                                <Link to={'/clients/add'} className="btn btn-primary btn-sm pull-right"><i className="fa fa-plus"></i> Add New Client </Link>
                                <Link to={'/clients'} className="btn btn-primary btn-sm pull-right mr-1"><i className="fa fa-download"></i> Download XLS </Link>
                            </div>
                            <div className="card-block">
                                <div className="form-group row">
                                  <div className="col-3">
                                    <input type="text" className="form-control" placeholder="Name, email and phone"/>
                                  </div>
                                  <div className="col-3">
                                    <input type="text" className="form-control"  placeholder="Addrress"/>
                                  </div>
                                  <div className="col-3">
                                    <select className="form-control">
                                      <option>Status</option>
                                      <option>Active</option>
                                      <option>Inactive</option>
                                    </select>
                                  </div>

                                  <div className="col-3">
                                    <select className="form-control">
                                      <option>Category</option>
                                      <option>Yogo</option>
                                      <option>Cycling</option>
                                    </select>
                                  </div>

                                </div>

                                <div className="form-group row">


                                  <div className="col-6">
                                    <input type="text" className="form-control"  placeholder="Registered Date"/>
                                  </div>

                                  <div className="col-6">

                                    <button className="btn btn-default btn-sm pull-right">Clear Filter </button>
                                    <button className="btn btn-primary btn-sm pull-right  mr-1">Search </button>
                                  </div>
                                </div>

                                <ClintList clist={this.state.clientList} onClientDelete={this.handleClientRemove.bind(this)} />
                            </div>
                        </div>
                    </div>
                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                </div>
            </div>
        )
    }
}

var ClintList = React.createClass({
    handleClientRemove: function(client){
      this.props.onClientDelete( client );
    },
    render: function() {
      var companies = [];
          var that = this;
          this.props.clist.forEach(function(client, key) {
            companies.push(<Client client={client} onClientDelete={() => that.handleClientRemove(client)}  key={key}/> );
        });
          return (
            <table className="table table-hover table-outline mb-0 hidden-sm-down">
                <thead className="thead-default">
                    <tr>
                        <th>Client List</th>
                        <th>Email Address</th>
                        <th>Mobile Number</th>
                        <th>Location</th>
                        <th className="text-center">Zipcode</th>
                        <th className="text-center">Registration Date</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {companies}
                </tbody>
            </table>
        );
    }

});

var Client = React.createClass({
    handleClientRemove: function() {
      this.props.onClientDelete( this.props.client );
      return false;
    },
    render: function() {
      return (
        <tr>

            <td>
                <div>{this.props.client.name}</div>
            </td>
            <td>
                <div>{this.props.client.email}</div>
            </td>
            <td>
                <div>{this.props.client.phone}</div>
            </td>
            <td>
                <div>{this.props.client.address}</div>
            </td>
            <td className="text-center">
                {this.props.client.postal_code}
            </td>
            <td className="text-center">
                <Moment format="DD/MM/YYYY">{this.props.client.createdAt}</Moment>

            </td>
            <td className="text-center">
                <div className={(this.props.client.status) ? "text-success" : "text-danger"}><strong>{(this.props.client.status) ? 'Active' : 'Inactive'}</strong></div>
            </td>
            <td>
                <div className="text-center">

                    <Link to={{pathname: `/clients/detail/${this.props.client.id}`, state: { client: this.props.client }}} className="mr-q">
                      <i className="fa fa-eye"  aria-hidden="true"></i>
                    </Link>
                    <a href="javasript:void(0)" onClick={this.handleClientRemove}><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </td>
        </tr>
        );
    }
});

const ConnectedApp = connect((state) => {
  return {
    state: state
  }
})(Clients)

export default ConnectedApp
