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
          className="align-items-stretch bg-black flex-md-nowrap p-0"
          type="dark">
          <img
            id="main-logo"
            className="mx-auto my-auto"
            src={require('../../../assets/images/trimm.png')}
            alt="trimm logo"
          />
          {/* eslint-disable-next-line */}
          <a
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}>
            {/* 화살표 아이콘 */}
            <i className="material-icons md-light">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    );
  }
}

export default SidebarMainNavbar;
