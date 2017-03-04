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
                {"id":"436000001","type":"text","title":"What can happen if hight blood pressure is left untreated.","created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Published"},
                {"id":"436000002","type":"video","title": "/img/avatars/video.png","created":"18/02/2017","modified":"2017-20-02 14:24:00","status":"Published"},

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

            this.msg.show('Article has been deleted successfully', {
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
                                <strong>Article Manager</strong>
                                <Link to={'/article/add'} className="btn btn-primary btn-sm pull-right"><i className="fa fa-plus"></i> Add New Article </Link>
                            </div>
                            <div className="card-block">
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
                        <th>Article ID</th>
                        <th>Article</th>
                        <th>Like #</th>
                        <th>Comment #</th>
                        <th className="text-center">Add Date</th>
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
                <div>{this.props.client.type === 'video' ? <img src={this.props.client.title} className="video_image" alt="User"/> : this.props.client.title}</div>
            </td>
            <td>1</td>
            <td>10</td>
            <td className="text-center">
                <div>{this.props.client.created}</div>
            </td>
            <td className="text-center">
                <div className="text-success"><strong>{this.props.client.status}</strong></div>
            </td>
            <td>
                <div className="text-center">
                    <Link to={'/article/add'} className="mr-q"><i className="fa fa-pencil-square-o"  aria-hidden="true"></i> </Link>
                    <a href="#" onClick={this.handleClientRemove}><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </td>
        </tr>
        );
    }
});


export default Clients;
