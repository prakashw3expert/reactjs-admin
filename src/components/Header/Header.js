import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux'

import {logout} from '../../actions'

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount(){

  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
    return false;
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
        <a className="navbar-brand" href="#"></a>
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
          </li>
          {/*<li className="nav-item px-1">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#">Users</a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#">Settings</a>
          </li> */}
        </ul>
        <ul className="nav navbar-nav ml-auto">
          {/*<li className="nav-item hidden-md-down">
            <a className="nav-link" href="#"><i className="icon-bell"></i><span className="badge badge-pill badge-danger">5</span></a>
          </li>*/}
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>

              <a href="javasript:void(0)" onClick={this.toggle} className="nav-link dropdown-toggle nav-link" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <span className="hidden-md-down">Welocme {this.props.state.User.name}</span>
              </a>

              <DropdownMenu className="dropdown-menu-right">
                  {/*<DropdownItem header className="text-center"><strong>Settings</strong></DropdownItem>

              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>

                <DropdownItem><i className="fa fa-key"></i> Change Password</DropdownItem>*/}
                <DropdownItem>
                <Link onClick={this.props.logout}  className=""><i className="fa fa-lock"></i> Logout </Link><
                /DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="nav-item hidden-md-down">

          </li>
        </ul>
      </header>
    )
  }
}

const ConnectedApp = connect((state) => {
  return {
    state: state
  }
}, {logout})(Header)

export default ConnectedApp
