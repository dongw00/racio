import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
} from 'shards-react';

import {app} from '../../firebase/FBinit';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      userDetails: {}
    };

    this.ConfirmLogin = this.ConfirmLogin.bind(this);
    this.LoadUser = this.LoadUser.bind(this);

    this.ConfirmLogin();
  }

  ConfirmLogin() {
    app.auth().onAuthStateChanged(user => {
      if(user) this.setState({ user: user });
      this.LoadUser();
    });
  }

  LoadUser() {
    this.setState({
      userDetails: {
        name: this.state.user ? this.state.user.displayName : "오류",
        avatar: this.state.user.photoURL,
        jobTitle: '레이시오 리액트팀',
        performanceReportTitle: '진행률',
        performanceReportValue: 74,
        metaTitle: '자기 소개',
        metaValue:
          '자기 소개가 없습니다.',
      }
    });
  }

  render() {
    return (
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={this.state.userDetails.avatar}
              alt={this.state.userDetails.name}
              width="110"
            />
          </div>
          <h4 className="mb-0">{this.state.userDetails.name}</h4>
          <span className="text-muted d-block mb-2">{this.state.userDetails.jobTitle}</span>
          <Button pill outline size="sm" className="mb-2">
            <i className="material-icons mr-1">person_add</i> Follow
      </Button>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="px-4">
            <div className="progress-wrapper">
              <strong className="text-muted d-block mb-2">
                {this.state.userDetails.performanceReportTitle}
              </strong>
              <Progress
                className="progress-sm"
                value={this.state.userDetails.performanceReportValue}>
                <span className="progress-value">
                  {this.state.userDetails.performanceReportValue}%
            </span>
              </Progress>
            </div>
          </ListGroupItem>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              {this.state.userDetails.metaTitle}
            </strong>
            <span>{this.state.userDetails.metaValue}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default UserDetails;
