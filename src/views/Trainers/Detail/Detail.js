import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Schedules from '../../../views/Trainers/Detail/Schedules';
import Sessions from '../../../views/Trainers/Detail/Sessions';
import Comments from '../../../views/Trainers/Detail/Comments';
import Reviews from '../../../views/Trainers/Detail/Reviews';
import AddTrainer from '../../../views/Trainers/Add/';

class Details extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: "1",
        Schedules : [
            {"id":"436000001","day":"Monday","start_time":"10 AM","end_time":"2:30 PM","status":true},
            {"id":"436000001","day":"Monday","start_time":"10 AM","end_time":"2:30 PM","status":true},
            {"id":"436000001","day":"Monday","start_time":"10 AM","end_time":"2:30 PM","status":true},
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
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                Yiorgos Avraamu
              </div>
              <div className="card-block">
                <Tabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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

    return (
      <div className="animated fadeIn">
      <div className="row">
        <div className="col-lg-12">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-lg-1">
                <div className="avatar">
                  <img src={'/img/avatars/1.jpg'} className="img-avatar md" alt="User"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div className="col-lg-2">
                <div><i className="fa fa-user"></i> Yiorgos Avraamu</div>
                <div className="text-muted">
                  <i className="fa fa-map-marker"></i>  Bristl, BS4 5SS, UK
                </div>
              </div>
              <div className="col-lg-3">
                <div><i className="fa fa-envelope"></i> brandom@ptspotter.co.uk</div>
                <div className="text-muted">
                  <i className="fa fa-mobile"></i> +447777777777
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
                <div>25/02/2017</div>
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
                  <strong>Schedule</strong>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  <strong>Sessions</strong>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  <strong>Comments</strong>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                  <strong>Reviews</strong>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '5' })}
                  onClick={() => { this.toggle('5'); }}
                >
                  <strong>Settings</strong>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>

              <TabPane tabId="1">
                  <Schedules  />
              </TabPane>

              <TabPane tabId="2">
                <Sessions  />
              </TabPane>

              <TabPane tabId="3">
              <Comments />
              </TabPane>

              <TabPane tabId="4">
                <Reviews  />
              </TabPane>

              <TabPane tabId="5">
                <AddTrainer action="edit" />
              </TabPane>

            </TabContent>
          </div>



        </div>
      </div>
    )
  }
}



export default Details;
