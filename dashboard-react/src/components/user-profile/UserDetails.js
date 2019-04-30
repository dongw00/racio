import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
} from 'shards-react';

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{userDetails.name}</h4>
      <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> 팔로우
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {userDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            value={userDetails.performanceReportValue}>
            <span className="progress-value">
              {userDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object,
};

UserDetails.defaultProps = {
  userDetails: {
    name: '박진우',
    avatar: require('./../../assets//images/avatars/wo.jpg'),
    jobTitle: '레이시오 리액트팀',
    performanceReportTitle: '진행률',
    performanceReportValue: 74,
    metaTitle: '자기 소개',
    metaValue:
      '자기 소개가 없습니다.',
  },
};

export default UserDetails;
