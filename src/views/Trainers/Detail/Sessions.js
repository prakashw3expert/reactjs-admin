import React, { Component } from 'react';




class Details extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: "1",
        Sessions : [
          {"id":"136363631","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"pt":{"name" : 'Ernest Wood','gym' : "Block Londom Gym","image" : "/img/avatars/3.jpg"},"start_date" : "13 Feb 2017","time" : "10:00 AM","status" : "Pending"},
          {"id":"136363632","client":{"name" : 'Garrett West','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/2.jpg"},"pt":{"name" : 'Mitchell Sandoval','gym' : "Globle Londom Gym","image" : "/img/avatars/4.jpg"},"start_date" : "14 Feb 2017","time" : "10:00 AM","status" : "Active"},
          {"id":"136363633","client":{"name" : 'Garrett West','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/2.jpg"},"pt":{"name" : 'Mitchell Sandoval','gym' : "Globle Londom Gym","image" : "/img/avatars/4.jpg"},"start_date" : "15 Feb 2017","time" : "10:00 AM","status" : "Active"},
          {"id":"136363634","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"pt":{"name" : 'Ernest Wood','gym' : "Block Londom Gym","image" : "/img/avatars/3.jpg"},"start_date" : "16 Feb 2017","time" : "10:00 AM","status" : "Pending"},
          {"id":"136363635","client":{"name" : 'Garrett West','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/2.jpg"},"pt":{"name" : 'Mitchell Sandoval','gym' : "Globle Londom Gym","image" : "/img/avatars/4.jpg"},"start_date" : "17 Feb 2017","time" : "10:00 AM","status" : "Active"},
          {"id":"136363636","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"pt":{"name" : 'Ernest Wood','gym' : "Block Londom Gym","image" : "/img/avatars/3.jpg"},"start_date" : "19 Feb 2017","time" : "10:00 AM","status" : "Completed"},
        ]
    };
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
            <th className="text-left">Client</th>
            <th className=""></th>
            <th className="text-left">Gym</th>
            <th className="">Date & Time</th>
            <th className="">Workouts</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {avaibility}
        </tbody>
      </table>
      );
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
          <td>
            <div>
              {this.props.data.pt.gym}
            </div>
            <div className="small text-muted"><span>5ER 6DD</span></div>
          </td>
          <td>
            {this.props.data.start_date}
            <div className="small text-muted"><span>{this.props.data.time}</span></div>
          </td>
          <td>
            <span  className="btn btn-outline-primary btn-sm mr-sm-h">Yoga</span>
            <span  className="btn btn-outline-primary btn-sm">Cardio</span>
          </td>
          <td>
          {this.props.data.status}
          </td>
        </tr>

        );
    }
});

export default Details;
