import React, { Component } from 'react';
import { Link } from 'react-router';
import * as axios from 'axios'
import Moment from 'react-moment';
import AppConfig from  "../../Config/AppConfig"
let localStorage = require('localStorage')

class Workouts extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            shedules : [

            ]
        };

        this.resultSet =[];
    }

    componentWillMount () {
      var filters = {
        include: [
          {relation: 'trainer', scope: { fields: ['name', 'image', "address", "id","gym"]}},
          {relation: 'user', scope: { fields: ['name', 'image', "address", "id","gym"]}}
        ]
      }

      filters = JSON.stringify(filters);

      axios.get(AppConfig.ApiUrl + "sessions?access_token="+localStorage.ptspotter_accessToken + "&filter="+filters)
      .then(res => {
          this.setState({shedules : res.data})
      })


    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }



    render() {
      var avaibility = [];
      this.state.shedules.forEach(function(sche, key) {
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
                              <th className="text-left">Client</th>
                              <th className=""></th>
                              <th className="">PT</th>
                              <th className=""></th>
                              <th className="">Gym</th>
                              <th className="">Date & Time</th>
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
      console.log(this.props.data);
      return (
        <tr>
          <td className="text-left"><div className="avatar">
            <img src={this.props.data.trainer_image} className="img-avatar" alt="User"/>
            <span className="avatar-status badge-success"></span>
          </div>
          </td>
          <td>
            <div>
              {this.props.data.user.name}
            </div>
            <div className="small text-muted"><span>{this.props.data.user.address}</span></div>
          </td>
          <td className="text-left">
          <div className="avatar">
            <img src={this.props.data.trainer_image} className="img-avatar" alt="User"/>
            <span className="avatar-status badge-success"></span>
          </div>
          </td>
          <td>
            <div>{this.props.data.trainer.name}</div>
            <div className="small text-muted"><span>{this.props.data.trainer.address}</span></div>
          </td>
          <td>
            <div>{this.props.data.gym['name']}</div>
            <div className="small text-muted"><span>{this.props.data.gym['postal']}</span></div>
          </td>
          <td>
            <Moment format="DD/MM/YYYY">{this.props.data.session_date}</Moment>
            <div className="small text-muted"><span>
            <Moment format="HH:mm">{"2017-01-01 "+this.props.data.start_time}</Moment> - <Moment format="HH:mm">{"2017-01-01 "+this.props.data.end_time}</Moment>
            </span></div>
          </td>
        </tr>

        );
    }
});

export default Workouts;
