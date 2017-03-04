import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Dashboard </Link>
            </li>
            <li className="nav-item">
              <Link to={'/clients'} className="nav-link" activeClassName="active"><i className="icon-user"></i> Client manager </Link>
            </li>
            <li className="nav-item">
              <Link to={'/trainers'} className="nav-link" activeClassName="active"><i className="icon-people"></i> PT manager </Link>
            </li>

            <li className="nav-item">
              <Link to={'/workouts'} className="nav-link" activeClassName="active"><i className="icon-tag"></i> Session manager </Link>
            </li>


            {/*<li className={this.activeRoute("/reports")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-chart"></i> Reports</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/reports/clients'} className="nav-link" activeClassName="active"><i className="icon-user"></i> Clients</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/trainers'} className="nav-link" activeClassName="active"><i className="icon-people"></i> PT</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/reports/schedules'} className="nav-link" activeClassName="active"><i className="icon-calendar"></i> Schedules</Link>
                </li>
              </ul>
            </li> */ }
            <li className={this.activeRoute("/cms")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-info"></i> CMS</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/categories'} className="nav-link" activeClassName="active"><i className="icon-list"></i> Category manager </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/article'} className="nav-link" activeClassName="active"><i className="icon-note"></i> Articles</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pages/about-us'} className="nav-link" activeClassName="active"><i className="icon-info"></i> About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pages/term-conditions'} className="nav-link" activeClassName="active"><i className="icon-info"></i> Terms & Conditions</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pages/privacy'} className="nav-link" activeClassName="active"><i className="icon-info"></i> Privacy Policy</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
