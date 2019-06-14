import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';

import SmallStats from '../components/common/SmallStats';
import HistoryChart from './HistoryChart';
import MapComponent from '../components/maps/MapComponent';

import moment from 'moment';

const HistoryDetails = ({ log }) => {
  const date = moment(new Date(946728000000 + 31557600000 + log.header.time * 1000)).format(
    'YYYY-MM-DD HH:mm:ss'
  );

  const speeds = [];
  const distances = [];
  const calories = [];
  log.body.forEach(state => {
    if (state.speed) speeds.push(state.speed);
    if (state.distance) distances.push(state.distance);
    if (state.calories) calories.push(state.calories);
  });

  const statProps = [
    {
      label: 'Distance',
      value: distances[distances.length - 1],
      percentage: 'meters',
      increase: true,
      chartLabels: distances,
      attrs: { md: '6', sm: '6' },
      datasets: [
        {
          label: 'Distance',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(0, 184, 216, 0.1)',
          borderColor: 'rgb(0, 184, 216)',
          data: distances,
        },
      ],
    },
    {
      label: 'Calories',
      value: calories[calories.length - 1],
      percentage: 'kcal',
      increase: false,
      chartLabels: calories,
      attrs: { md: '6', sm: '6' },
      datasets: [
        {
          label: 'Calories',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(23,198,113,0.1)',
          borderColor: 'rgb(23,198,113)',
          data: calories,
        },
      ],
    },
  ];

  const chartProps = {
    title: 'Record Chart',
    chartData: {
      labels: Array.from(new Array(log.body.length), (_, i) =>
        i === 0 ? 1 : i
      ),
      datasets: [
        {
          label: 'Speed',
          fill: 'start',
          data: speeds,
          backgroundColor: 'rgba(0,123,255,0.1)',
          borderColor: 'rgba(0,123,255,1)',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: 'rgb(0,123,255)',
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3,
        },
      ],
    },
  };
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row>
        <Col className="mb-4">
          <h5 className="text-uppercase page-subtitle">{date}</h5>
          <MapComponent />
        </Col>
      </Row>

      {/* Small Stats Blocks */}
      <Row>
        {statProps.map((stats, idx) => {
          return (
            <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
              <SmallStats
                id={`small-stats-${idx}`}
                // variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={parseInt(stats.value)}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          );
        })}
      </Row>

      <Row>
        {/* Users Overview */}
        <Col className="mb-4">
          <HistoryChart {...chartProps} />
        </Col>
      </Row>
    </Container>
  );
};

HistoryDetails.propTypes = {
  log: PropTypes.object,
};
export default HistoryDetails;
