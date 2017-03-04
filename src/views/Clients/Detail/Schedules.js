import React, { Component } from 'react';




class Details extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: "1",
        Schedules : [
            {"id":"436000001","day":"Monday","start_time":"10 AM","end_time":"2:30 PM","status":true},
            {"id":"436000002","day":"Tuesday","start_time":"08 AM","end_time":"4:00 PM","status":false},
            {"id":"436000003","day":"Friday","start_time":"02:00 PM","end_time":"10:00 PM","status":false},
            {"id":"436000003","day":"Friday","start_time":"02:00 PM","end_time":"10:00 PM","status":true},
            {"id":"436000003","day":"Friday","start_time":"02:00 PM","end_time":"10:00 PM","status":false},
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
    this.state.Schedules.forEach(function(sche, key) {
      avaibility.push(<ListSchedule data={sche}   key={key}/> );
    });
    return (
      <table className="table table-hover table-outline mb-0 hidden-sm-down animated fadeIn">
        <thead className="thead-default">
          <tr>
            <th className="">Day</th>
            <th className="">Start Time</th>
            <th className="">End Time</th>
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
          <td>
            <div className="avatar">
              {this.props.data.day}
            </div>
          </td>
          <td>
            <div>{this.props.data.start_time}</div>
          </td>
          <td>
            {this.props.data.end_time}
          </td>
          <td>
          <label className="switch switch-3d switch-primary">
          {this.props.data.status === true ? <input type="checkbox" id="status" name="status" defaultChecked className="switch-input"   onChange={ this.changeValue }/> : <input type="checkbox" id="status" name="status"  className="switch-input"   onChange={ this.changeValue }/>}

            <span className="switch-label"></span>
            <span className="switch-handle"></span>
          </label>
          </td>
        </tr>

        );
    }
});

export default Details;
