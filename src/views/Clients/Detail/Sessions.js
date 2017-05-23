import React, { Component } from 'react';
import * as axios from 'axios'
import Moment from 'react-moment';
import AppConfig from  "../../../Config/AppConfig"
let localStorage = require('localStorage')



class Details extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: "1",
        Sessions : []
    };
  }

  componentWillMount () {
    var pathname = this.props.client;
    pathname = pathname.split('/');
    var clientId = pathname[3];

    var filters = {
      where  : {userId : clientId},
      include: [
        {relation: 'trainer', scope: { fields: ['name', 'image', "address", "id","gym"]}}
      ]
    }

    filters = JSON.stringify(filters);

    axios.get(AppConfig.ApiUrl + "sessions?access_token="+localStorage.ptspotter_accessToken + "&filter="+filters)
    .then(res => {
        console.log("res.data",res.data)
        this.setState({Sessions : res.data})
    })


  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    var avaibility = [];
    this.state.Sessions.forEach(function(sche, key) {
      avaibility.push(<ListSchedule data={sche}   key={key}/> );
    });
    return (
      <table className="table table-hover table-outline mb-0 hidden-sm-down animated fadeIn">
        <thead className="thead-default">
          <tr>
            <th className="text-left">Session ID</th>
            <th className="">PT</th>
            <th className=""></th>
            <th className="">Gym</th>
            <th className="">Date & Time</th>
            <th className="">Workouts</th>
          </tr>
        </thead>
        <tbody>
          {(this.state.Sessions.lenth) ? avaibility : <NoSessions />}
        </tbody>
      </table>
      );
  }

}

var ListSchedule = React.createClass({
    render: function() {
      var selectedWorkouts = [];
      return (
        <tr>
          <td className="text-left">{this.props.data.id}
          </td>
          <td className="text-left">
          <div className="avatar">
            <img src={(this.props.data.trainer.image) ? this.props.data.baseUrl + this.props.data.trainer.image : this.props.data.default_image} className="img-avatar" alt="User"/>
            <span className="avatar-status badge-success"></span>
          </div>
          </td>
          <td>
            <div>{this.props.data.trainer.name}</div>
            <div className="small text-muted"><span>{this.props.data.trainer.address}</span></div>
          </td>
          <td>
            <div>{this.props.data.gym.name}</div>
            <div className="small text-muted"><span>{this.props.data.gym.postalcode}</span></div>
          </td>
          <td>
            <Moment format="DD/MM/YYYY">{this.props.data.session_date}</Moment>
            <div className="small text-muted">
              <Moment format="HH:mm">{"2017-01-01 "+this.props.data.start_time}</Moment>
            </div>
          </td>
          <td>
            {this.props.data.workouts.forEach(function(workout, key) {
              selectedWorkouts.push(<span  className="btn btn-outline-primary btn-sm mr-sm-h" key={key}>{workout.name}</span> );
            })}

            {selectedWorkouts}

          </td>
        </tr>

        );
    }
});

var NoSessions = React.createClass({
    render: function() {
      return (
        <tr>
          <td className="text-center" colSpan={6}><h6>No session available for this client.</h6></td>
        </tr>
        );
    }
});

export default Details;
