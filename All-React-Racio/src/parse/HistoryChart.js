import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'shards-react';

import Chart from '../utils/chart';

class HistoryChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: 'top',
        },
        elements: {
          line: {
            tension: 0.3,
          },
          point: {
            radius: 0,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 7 !== 0 ? '' : tick;
                },
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                },
              },
            },
          ],
        },
        hover: {
          mode: 'nearest',
          intersect: false,
        },
        tooltips: {
          custom: false,
          mode: 'nearest',
          intersect: false,
        },
      },
      ...this.props.chartOptions,
    };

    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: 'LineWithLine',
      data: this.props.chartData,
      options: chartOptions,
    });

    // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
      this.props.chartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          {/* <Row className="border-bottom py-2 bg-light">
            <Col sm="6" className="d-flex mb-2 mb-sm-0">
              <RangeDatePicker />
            </Col>
            <Col>
              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0">
                View Full Report &rarr;
              </Button>
            </Col>
          </Row> */}
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: '100% !important' }}
          />
        </CardBody>
      </Card>
    );
  }
}

HistoryChart.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
};

export default HistoryChart;
