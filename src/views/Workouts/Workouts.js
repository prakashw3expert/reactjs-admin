import React, { Component } from 'react';
import { Link } from 'react-router';

class Workouts extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            clientList : [
              {"id":"1001","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"pt":{"name" : 'Ernest Wood','gym' : "Block Londom Gym","image" : "/img/avatars/3.jpg"},"start_date" : "13 Feb 2017","time" : "10:00 AM","status" : "Pending"},
              {"id":"1002","client":{"name" : 'Garrett West','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/2.jpg"},"pt":{"name" : 'Mitchell Sandoval','gym' : "Globle Londom Gym","image" : "/img/avatars/4.jpg"},"start_date" : "15 Feb 2017","time" : "10:00 AM","status" : "Active"},
              {"id":"1003","client":{"name" : 'Garrett West','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/2.jpg"},"pt":{"name" : 'Mitchell Sandoval','gym' : "Globle Londom Gym","image" : "/img/avatars/4.jpg"},"start_date" : "16 Feb 2017","time" : "10:00 AM","status" : "Active"},
              {"id":"1004","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"pt":{"name" : 'Ernest Wood','gym' : "Block Londom Gym","image" : "/img/avatars/3.jpg"},"start_date" : "17 Feb 2017","time" : "10:00 AM","status" : "Pending"},
              {"id":"1005","client":{"name" : 'Garrett West','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/2.jpg"},"pt":{"name" : 'Mitchell Sandoval','gym' : "Globle Londom Gym","image" : "/img/avatars/4.jpg"},"start_date" : "18 Feb 2017","time" : "10:00 AM","status" : "Active"},
              {"id":"1006","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"pt":{"name" : 'Ernest Wood','gym' : "Block Londom Gym","image" : "/img/avatars/3.jpg"},"start_date" : "19 Feb 2017","time" : "10:00 AM","status" : "Completed"},
            ]
        };

        this.resultSet =[];
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }



    render() {
      var avaibility = [];
      this.state.clientList.forEach(function(sche, key) {
        avaibility.push(<ListSchedule data={sche}   key={key}/> );
      });
    return (
        <div className="animated fadeIn">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Session manager
                            <Link to={'/clients'} className="btn btn-primary btn-sm pull-right mr-1"><i className="fa fa-download"></i> Download XLS </Link>
                        </div>
                        <div className="card-block">
                        <div className="form-group row">
                          <div className="col-3">
                            <input type="text" className="form-control" placeholder="Cleint  Name, email and phone"/>
                          </div>
                          <div className="col-3">
                            <input type="text" className="form-control" placeholder="PT  Name, email and phone"/>
                          </div>
                          <div className="col-3">
                            <input type="text" className="form-control"  placeholder="City & Postal code"/>
                          </div>
                          <div className="col-3">
                            <select className="form-control">
                              <option>Country</option>
                            </select>
                          </div>

                        </div>

                        <div className="form-group row">
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

                          <div className="col-3">
                            <input type="text" className="form-control"  placeholder="Session Date"/>
                          </div>

                          <div className="col-3">

                            <button className="btn btn-default btn-sm pull-right">Clear Filter </button>
                            <button className="btn btn-primary btn-sm pull-right  mr-1">Search </button>
                          </div>
                        </div>

                        <table className="table table-hover table-outline mb-0 hidden-sm-down animated fadeIn">
                          <thead className="thead-default">
                            <tr>
                              <th className="text-left">Session ID</th>
                              <th className="text-left">Client</th>
                              <th className=""></th>
                              <th className="">PT</th>
                              <th className=""></th>
                              <th className="">Gym</th>
                              <th className="">Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {avaibility}
                          </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

var ListSchedule = React.createClass({
    render: function() {
      return (
        <tr>
          <td className="text-left">{this.props.data.id}
          </td>
          <td className="text-left"><div className="avatar">
            <img src={this.props.data.client.image} className="img-avatar" alt="User"/>
            <span className="avatar-status badge-success"></span>
          </div>
          </td>
          <td>
            <div>
              {this.props.data.client.name}
            </div>
            <div className="small text-muted"><span>{this.props.data.client.location}</span></div>
          </td>
          <td className="text-left">
          <div className="avatar">
            <img src={this.props.data.pt.image} className="img-avatar" alt="User"/>
            <span className="avatar-status badge-success"></span>
          </div>
          </td>
          <td>
            <div>{this.props.data.pt.name}</div>
            <div className="small text-muted"><span>{this.props.data.client.location}</span></div>
          </td>
          <td>
            <div>{this.props.data.pt.gym}</div>
            <div className="small text-muted"><span>5ER 387</span></div>
          </td>
          <td>
            {this.props.data.start_date}
            <div className="small text-muted"><span>{this.props.data.time}</span></div>
          </td>

          <td>
          {this.props.data.status}
          </td>
        </tr>

        );
    }
});

export default Workouts;
