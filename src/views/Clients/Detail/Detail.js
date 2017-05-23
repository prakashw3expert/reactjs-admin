import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import Sessions from '../../../views/Clients/Detail/Sessions';
import AddTrainer from '../../../views/Clients/Add/';

import AppConfig from  "../../../Config/AppConfig"
import * as axios from 'axios'
import Moment from 'react-moment';

class Details extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        client : {},
        activeTab: "1",
        Schedules : [
            {"id":"436000001","day":"Monday","start_time":"10 AM","end_time":"2:30 PM","status":true},
            {"id":"436000001","day":"Monday","start_time":"10 AM","end_time":"2:30 PM","status":true},
            {"id":"436000001","day":"Monday","start_time":"10 AM","end_time":"2:30 PM","status":true},
        ]
    };
  }


  componentWillMount () {
    var pathname = this.props.location.pathname;
    pathname = pathname.split('/');
    var clientId = pathname[3];

    //+ '&filter[where][role]=client'

    axios.get(AppConfig.ApiUrl + "users/" + clientId + "?access_token="+localStorage.ptspotter_accessToken)
    .then(res => {
        this.setState({client : res.data})

    })
    .catch(function (error) {
        console.log('Loading Failed');
    });

  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const client = this.state.client;
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                {this.state.client.name}
              </div>
              <div className="card-block">
              <div className="animated fadeIn">
              <div className="row">
                <div className="col-lg-12">
                <div className="card">
                  <div className="card-block">
                    <div className="row">
                      <div className="col-lg-1">
                        <div className="avatar">
                          <img src={client.image} className="img-avatar md" alt="User"/>
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div><i className="fa fa-user"></i> {client.name}</div>
                        <div className="text-muted">
                          <i className="fa fa-map-marker"></i>  {client.address}
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div><i className="fa fa-envelope"></i> {client.email}</div>
                        <div className="text-muted">
                          <i className="fa fa-mobile"></i> {client.phone}
                        </div>

                      </div>
                      <div className="col-lg-2">

                        <label className="switch switch-3d switch-primary">
                          <input type="checkbox" id="{props.name}" name={this.props.name}  className="switch-input" defaultChecked onChange={ this.changeValue }/>
                          <span className="switch-label"></span>
                          <span className="switch-handle"></span>
                        </label>
                        <div className="small text-muted">
                          Status
                        </div>
                      </div>

                      <div className="col-lg-2">
                        <Moment format="DD/MM/YYYY">{client.created}</Moment>
                        <div className="text-muted">
                          Registered Date
                        </div>
                      </div>

                      <div className="col-lg-2">
                        <div>
                        <img src={'/img/star.png'} alt=""/>
                        <img src={'/img/star.png'} alt=""/>
                        <img src={'/img/star.png'} alt=""/>
                        <img src={'/img/star.png'} alt=""/>
                        <img src={'/img/star.png'} alt=""/>
                        </div>
                        <div className="text-muted">
                          Avg. Rating
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                </div>
              </div>
              <br/>
                <div className="row">
                  <div className="col-md-12">
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '1' })}
                          onClick={() => { this.toggle('1'); }}
                        >
                          <strong>Traning Sessions</strong>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '2' })}
                          onClick={() => { this.toggle('2'); }}
                        >
                          <strong>Settings</strong>
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>

                      <TabPane tabId="1">
                          <Sessions client={this.props.location.pathname} />
                      </TabPane>

                      <TabPane tabId="2">

                        <AddTrainer action="edit" client={this.props.location.pathname}  />
                      </TabPane>

                    </TabContent>
                  </div>



                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default Details;
