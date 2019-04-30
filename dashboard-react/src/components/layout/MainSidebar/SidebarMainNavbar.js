import React from 'react';
import { Navbar, NavbarBrand } from 'shards-react';

import { Dispatcher, Constants } from '../../../flux';

class SidebarMainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR,
    });
  }

  render() {
    return (
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-dark flex-md-nowrap p-0"
          type="dark">
          <img
            id="main-logo"
            className="d-inline-block align-top mr-1"
            style={{ width: '100%', height: 'auto' }}
            src={require('../../../assets/images/trimm.PNG')}
            alt="Shards Dashboard"
          />
          {/* eslint-disable-next-line */}
          <a
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}>
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    );
  }
}

export default SidebarMainNavbar;
