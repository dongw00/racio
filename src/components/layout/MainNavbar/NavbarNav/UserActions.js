import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink,
} from 'shards-react';

import {app} from '../../../../firebase/FBinit';

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
    this.ConfirmLogin = this.ConfirmLogin.bind(this);

    this.ConfirmLogin();
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  ConfirmLogin() {
    app.auth().onAuthStateChanged(user => {
        if(user) this.setState({ user });
    });
}

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={this.state.user ? this.state.user.photoURL : require("../../../../assets/images/app-promo/No_url.png")}
            alt="User Avatar"
          />{' '}
          <span className="d-none d-md-inline-block">{this.state.user ? this.state.user.displayName : null}</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit profile
          </DropdownItem>
          {/* <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> 파일
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem> */}
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
