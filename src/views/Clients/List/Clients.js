import React, { Component } from 'react';
import { Link } from 'react-router';
import AlertContainer from 'react-alert';


class Clients extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            clientList : [
                {"id":"436000001","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"436000002","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"436000003","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"436000004","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"436000005","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"436000006","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"436000007","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"436000008","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"436000009","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"4360000010","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"4360000011","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"4360000012","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"4360000013","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
                {"id":"4360000014","facebook_id":"43681725294524345","type":"user","name":"Brandom Bell","email":"brandom@ptspotter.co.uk","phone":"+447777777777","traning_area":"10","workout":["Item1","Item2","Item3","Item4"],"goals":[{"name":"Power Yoga","time":"10","count":"5"},{"name":"Aerobic","time":"20","count":"10"}],"location":"Kilmarnock KA1 5LQ, UK","lat":"55.547145","lng":"-4.7514894","profile_status":1,"appointment_notification":1,"geolocation":1,"created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Active"},
            ]
        };

        this.alertOptions = {
          offset: 50,
          position: 'top right',
          theme: 'dark',
          time: 0,
          transition: 'scale'
        };

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

            this.msg.show(client.name + ' has been deleted successfully', {
              type: 'success',
              time: 3000,
            });
        }
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
                                    <input type="text" className="form-control"  placeholder="City & Postal code"/>
                                  </div>
                                  <div className="col-3">
                                    <select className="form-control">
                                      <option>Country</option>
                                    </select>
                                  </div>
                                  <div className="col-3">
                                    <select className="form-control">
                                      <option>Status</option>
                                      <option>Active</option>
                                      <option>Inactive</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="form-group row">
                                  <div className="col-3">
                                    <select className="form-control">
                                      <option>Category</option>
                                      <option>Yogo</option>
                                      <option>Cycling</option>
                                    </select>
                                  </div>

                                  <div className="col-3">
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
            companies.push(<Client client={client} onClientDelete={that.handleClientRemove}  key={key}/> );
        });
          return (
            <table className="table table-hover table-outline mb-0 hidden-sm-down">
                <thead className="thead-default">
                    <tr>
                        <th>Client ID</th>
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
                <div>{this.props.client.id}</div>
            </td>
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
                <div>{this.props.client.location}</div>
            </td>
            <td className="text-center">
                302013
            </td>
            <td className="text-center">
                <div>{this.props.client.created}</div>
            </td>
            <td className="text-center">
                <div className="text-success"><strong>{this.props.client.status}</strong></div>
            </td>
            <td>
                <div className="text-center">
                    <Link to={'/clients/detail'} className="mr-q"><i className="fa fa-eye"  aria-hidden="true"></i> </Link>
                    <a href="#" onClick={this.handleClientRemove}><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </td>
        </tr>
        );
    }
});


export default Clients;
