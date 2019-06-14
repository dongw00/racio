import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Card, CardHeader, CardBody } from 'shards-react';

import HistoryDetails from '../../parse/HistoryDetails';

import moment from 'moment';
import _ from 'lodash';

import preview from '../../assets/images/preview.jpg';
import rightArrow from '../../assets/images/right_arrow.png';

class HistoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: null,
    };
    this.getMonth = this.getMonth.bind(this);
  }

  /* month date to String month */
  getMonth(v) {
    const monthName = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthName[v - 1];
  }

  test(log) {
    this.setState({ view: log });
  }

  render() {
    if (!this.props.data) return <p>Loading...</p>;
    else if (this.props.data === []) return <p>No Records</p>;
    else {
      if (this.state.view) {
        return <HistoryDetails log={this.state.view} />;
      } else {
        const parseDate = item =>
          new Date(946728000000 + 31557600000 + item.header.time * 1000);
        const monthName = item =>
          moment(parseDate(item), 'YYYY-MM-DD').format('M');
        const resultData = _.groupBy(this.props.data, monthName);
        const resData = _.toPairs(resultData).sort((o1, o2) => {
          if (o1[0] > o2[0]) return -1;
          else if (o1[0] < o2[0]) return 1;
          else return 0;
        });

        const HistList = resData.map((els, idx) => (
          <Card key={idx} className="mb-4">
            <CardHeader className="border-bottom">
              <h4 className="m-0">{`${this.getMonth(
                parseInt(els[0])
              )} History`}</h4>
            </CardHeader>

            <CardBody className="p-0">
              {els[1].map((el, idx) => (
                <div key={idx} className="blog-comments__item d-flex p-3">
                  {/* Map preview part */}
                  <div className="blog-comments__history mr-3">
                    <img src={preview} alt="preview" />
                  </div>
                  {/* Content */}
                  <div className="blog-comments__content">
                    {/* Content :: Title */}
                    <div className="blog-comments__meta text-mutes">
                      <h5 className="text-mutes">
                        {`${moment(parseDate(el)).format('dddd')}'s record`}
                      </h5>
                    </div>

                    {/* Content :: Body */}
                    <p className="m-0 my-1 mb-2 text-muted">
                      {moment(parseDate(el)).format('YYYY-MM-DD HH:mm')}
                    </p>

                    {/* Content :: Title */}
                    <div className="blog-comments__meta text-mutes">
                      {/* <span className="text-mutes">
                        주행거리 : 10km, 최고 속도 : 9km/h
                    </span> */}
                    </div>
                  </div>
                  {/* icon */}
                  <NavLink
                    className="blog-comments__arrow mr-4"
                    onClick={this.test.bind(this, el)}>
                    <input type="image" src={rightArrow} alt="" />
                  </NavLink>
                </div>
              ))}
            </CardBody>
          </Card>
        ));
        return HistList;
      }
    }
  }
}

HistoryList.propTypes = {
  monthName: PropTypes.func,
  resultData: PropTypes.object,
  histList: PropTypes.array,
};

export default HistoryList;
