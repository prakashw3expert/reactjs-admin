import React, { Component } from 'react';




class Reviews extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: "1",
        Sessions : [
            {"id":"1","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"date" : "10 min ago","comment" : 'The buddha is kept in the chapel of the emerald Buddha'},
            {"id":"1","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/2.jpg"},"date" : "Today 10 AM","comment" : 'which is located on the ground of the Grand Palace in Bangkok.'},
            {"id":"1","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"date" : "Yesterday 11PM","comment" : 'Hi am waiting af gym.'},
            {"id":"1","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"date" : "10 min ago","comment" : 'The buddha is kept in the chapel of the emerald Buddha'},
            {"id":"1","client":{"name" : 'Ernest Wood','location' : "Bristol, BS4 5SS, UK","image" : "/img/avatars/1.jpg"},"date" : "10 min ago","comment" : 'The buddha is kept in the chapel of the emerald Buddha'},

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
    var commentsList = [];
    this.state.Sessions.forEach(function(sche, key) {
      commentsList.push(<Comment data={sche}   key={key}/> );
    });
    return (
      <table className="table table-hover table-outline mb-0 hidden-sm-down animated fadeIn">
        <thead className="thead-default">
          <tr>
            <th className="text-left">PT</th>
            <th className=""></th>
            <th className="">Review</th>
            <th className="">Rating</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {commentsList}
        </tbody>
      </table>
      );
  }

}

var Comment = React.createClass({
  render: function() {
    return (
      <tr>
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
          <div>{this.props.data.comment}</div>
        </td>
        <td>
        <img src={'/img/star.png'} alt=""/>
        <img src={'/img/star.png'} alt=""/>
        <img src={'/img/star.png'} alt=""/>
        <img src={'/img/star.png'} alt=""/>
        <img src={'/img/star.png'} alt=""/>
        </td>
        <td>
          {this.props.data.date}
        </td>
      </tr>

      );
  }
});

export default Reviews;
