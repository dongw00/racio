import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.overNotifications = this.overNotifications.bind(this);
    this.leaveNotifications = this.leaveNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  overNotifications() {
    this.setState({
      visible: true
    });
  }

  leaveNotifications() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <NavItem className="border-right dropdown notifications"
        onClick={this.toggleNotifications}
        onMouseOver={this.overNotifications}
        onMouseLeave={this.leaveNotifications}>
        <NavLink className="nav-link-icon text-center">
          <div className="nav-link-icon__wrapper">
            <i className="material-icons" >&#xE7F4;</i>
            <Badge pill theme="danger">
              2
            </Badge>
          </div>
        </NavLink>
        <Collapse open={this.state.visible} className="dropdown-menu dropdown-menu-small">
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE6E1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Analysis</span>
              <p>
                Your website active users count increased by{" "}
                <span className="text-success text-semibold">28%</span> in the
                last week. Great job!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE8D1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Sales</span>
              <p>
                Last week your store sales count decreased by{" "}
                <span className="text-danger text-semibold">5.52%</span>. It
                could have been worse!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
            Show all notifications
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
