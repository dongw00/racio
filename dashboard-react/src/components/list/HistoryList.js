import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'shards-react';

import moment from 'moment';
import _ from 'lodash';

import preview from '../../assets/images/preview.jpg';
import rightArrow from '../../assets/images/right_arrow.png';

class HistoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data, isLoading: false };
    this.getMonth = this.getMonth.bind(this);
  }

  /* month date to String month */
  getMonth(v) {
    const monthName = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    return monthName[v + 1];
  }

  render() {
    const { data, isLoading } = this.state;

    if (isLoading) return <p>Loading...</p>;

    console.dir(data);
    /* Sort by recent date */
    data.sort((o1, o2) => {
      if (o1.date > o2.date) return -1;
      else if (o1.date < o2.date) return 1;
      else return 0;
    });

    console.dir(data);

    const monthName = item => moment(item.date, 'YYYY-MM-DD').format('M');

    const resultData = _.groupBy(data, monthName);
    const resData = _.toPairs(resultData).sort((o1, o2) => {
      if (o1[0] > o2[0]) return -1;
      else if (o1[0] < o2[0]) return 1;
      else return 0;
    });

    const HistList = resData.map((els, idx) => (
      <Card key={idx} className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{this.getMonth(els[0])}</h6>
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
                  <span className="text-mutes">
                    {moment(el.date).format('YYYY-MM-DD')}
                  </span>
                </div>

                {/* Content :: Body */}
                <p className="m-0 my-1 mb-2 text-muted">
                  {moment(el.date).format('YYYY-MM-DD')}
                </p>

                {/* Content :: Title */}
                <div className="blog-comments__meta text-mutes">
                  <span className="text-mutes">
                    주행거리 : 15km, 최고 속도 : 9km/h
                  </span>
                </div>
              </div>
              {/* icon */}
              <div className="blog-comments__arrow mr-4">
                <img src={rightArrow} alt="arrow" />
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    ));

    return <>{HistList}</>;
  }
}

HistoryList.propTypes = {
  monthName: PropTypes.func,
  resultData: PropTypes.object,
  histList: PropTypes.array,
};

export default HistoryList;
