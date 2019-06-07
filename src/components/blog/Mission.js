import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col,
} from 'shards-react';

const Mission = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{' '}
              on{' '}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
              <span className="text-mutes">- {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{' '}
                  Approve
                </Button>
                <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{' '}
                  Reject
                </Button>
                <Button theme="white">
                  <span className="text-light">
                    <i className="material-icons">more_vert</i>
                  </span>{' '}
                  Edit
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            View All Comments
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

Mission.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array,
};

Mission.defaultProps = {
  title: 'Mission',
  discussions: [
    {
      id: 1,
      date: '3일 전',
      author: {
        image: require('../../images/avatars/han.jpg'),
        name: '한혜진',
        url: '#',
      },
      post: {
        title: '50km 달성하기',
        url: '#',
      },
      body: '내 몸매가 되고싶어? 50km 달려야지',
    },
    {
      id: 2,
      date: '5일 전',
      author: {
        image: require('../../images/avatars/ma.jpg'),
        name: '마동석',
        url: '#',
      },
      post: {
        title: '3주 목표',
        url: '#',
      },
      body: '아오, 때릴 뻔 했네. 진우야 3일 동안 출석하자',
    },
    {
      id: 3,
      date: '10일 전',
      author: {
        image: require('../../images/avatars/kim.jpg'),
        name: '김부선',
        url: '#',
      },
      post: {
        title: '5km씩 더',
        url: '#',
      },
      body: '나도 진우나이때 하고싶은게 많았는데...',
    },
  ],
};

export default Mission;
