import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';
import { Link } from 'react-router-dom';
import SmallStats from '../components/common/SmallStats';
import HistoryChart from './HistoryChart';
import moment from 'moment';
import MapComponent from '../components/maps/MapComponent';
import { runInNewContext } from 'vm';

const HistoryDetails = ({ log }) => {
  var date = moment(new Date(946728000000 + log.header.time * 1000)).format(
    'YYYY-MM-DD HH:mm:ss'
  );

  var speeds = [];
  var distances = [];
  var calories = [];
  log.body.forEach(state => {
    if (state.speed) speeds.push(state.speed);
    if (state.distance) distances.push(state.distance);
    if (state.calories) calories.push(state.calories);
  });

  var statProps = [
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

  var chartProps = {
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
        // {
        //     label: 'Distance',
        //     fill: 'start',
        //     data: distances,
        //     backgroundColor: 'rgba(255,0,123,0.1)',
        //     borderColor: 'rgba(255,0,123,1)',
        //     pointBackgroundColor: '#ffffff',
        //     pointHoverBackgroundColor: 'rgb(255,0,123)',
        //     borderWidth: 1.5,
        //     pointRadius: 0,
        //     pointHoverRadius: 3,
        // },
        // {
        //     label: 'Calory',
        //     fill: 'start',
        //     data: calories,
        //     backgroundColor: 'rgba(123,255,0,0.1)',
        //     borderColor: 'rgba(123,255,0,1)',
        //     pointBackgroundColor: '#ffffff',
        //     pointHoverBackgroundColor: 'rgb(123,255,0)',
        //     borderWidth: 1.5,
        //     pointRadius: 0,
        //     pointHoverRadius: 3,
        // },
      ],
    },
  };
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <h5 className="text-uppercase page-subtitle">{date}</h5>
      <Row>
        {/* Users Overview */}
        <Col className="mb-4">
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
