import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';
import PageTitle from '../components/common/PageTitle';
import SmallStats from '../components/common/SmallStats';
import UsersOverview from '../components/main/UsersOverview';
import UsersByDevice from '../components/main/UsersByDevice';
import Mission from '../components/main/Mission';
import Ranking from '../components/common/Ranking';
import { parseData } from '../parse/Parser';

const MainPage = ({ smallStats }) => {
  const [data, setData] = useState(null);
  const [daily, setDaily] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [yearly, setYearly] = useState(0);
  const [arr, setArr] = useState(null);
  const [prev, setPrev] = useState(null);
  parseData().then(logs => {
    /* Sort by recent date */
    if (data === null) {
      setData(logs);
      var dail = 0,
        mon = 0,
        year = 0;

      var arrData = Array.apply(null, new Array(31)).map(
        Number.prototype.valueOf,
        0
      );
      var prevData = Array.apply(null, new Array(31)).map(
        Number.prototype.valueOf,
        0
      );
      var cur = new Date();
      var temp2 = logs.map((v, i) => {
        var temp3 = new Date(946728000000 + 31557600000 + v.header.time * 1000);
        // 3 smallstats
        if (cur.getYear() === temp3.getYear()) {
          var temp = v.body[v.body.length - 1].distance;
          if (typeof temp !== 'number') {
            year = year + v.body[v.body.length - 2].distance;
          } else {
            year = year + v.body[v.body.length - 1].distance;
          }

          if (cur.getMonth() === temp3.getMonth()) {
            temp = v.body[v.body.length - 1].distance;
            if (typeof temp !== 'number') {
              mon = mon + v.body[v.body.length - 2].distance;
            } else {
              mon = mon + v.body[v.body.length - 1].distance;
            }

            if (cur.getDate() === temp3.getDate()) {
              temp = v.body[v.body.length - 1].distance;
              if (typeof temp !== 'number') {
                dail = dail + v.body[v.body.length - 2].distance;
              } else {
                dail = dail + v.body[v.body.length - 1].distance;
              }
            }
          }
        }

        //blogOverview cur

        if (cur.getYear() === temp3.getYear()) {
          temp = v.body[v.body.length - 1].distance;
          if (cur.getMonth() === temp3.getMonth()) {
            if (typeof temp !== 'number') {
              arrData[temp3.getDate() - 1] +=
                v.body[v.body.length - 2].distance;
            } else {
              arrData[temp3.getDate() - 1] +=
                v.body[v.body.length - 1].distance;
            }
          }
        }
        //blogOverview prev
        if (cur.getMonth() === 1) {
          if (cur.getYear() - 1 === temp3.getYear()) {
            if (temp3.getMonth() === 12) {
              temp = v.body[v.body.length - 1].distance;
              if (typeof temp !== 'number') {
                prevData[temp3.getDate() - 1] +=
                  v.body[v.body.length - 2].distance;
              } else {
                prevData[temp3.getDate() - 1] +=
                  v.body[v.body.length - 1].distance;
              }
            }
          }
        } else {
          if (cur.getYear() === temp3.getYear()) {
            temp = v.body[v.body.length - 1].distance;
            if (cur.getMonth() === temp3.getMonth()) {
              if (typeof temp !== 'number') {
                prevData[temp3.getDate() - 1] +=
                  v.body[v.body.length - 2].distance;
              } else {
                prevData[temp3.getDate() - 1] +=
                  v.body[v.body.length - 1].distance;
              }
            }
          }
        }
      });
      dail = Math.round(dail * 100) / 100;
      mon = Math.round(mon * 100) / 100;
      year = Math.round(year * 100) / 100;
      setDaily(dail);
      setMonthly(mon);
      setYearly(year);
      setArr(arrData);
      setPrev(prevData);
    }
  });
  if (arr !== null && prev !== null) {
    console.log(arr);
    console.log(prev);
    var chartData = {
      labels: Array.from(new Array(31), (_, i) => (i === 0 ? 1 : i)),
      datasets: [
        {
          label: 'Current Month',
          fill: 'start',
          data: arr,
          backgroundColor: 'rgba(0,123,255,0.1)',
          borderColor: 'rgba(0,123,255,1)',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: 'rgb(0,123,255)',
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3,
        },
        {
          label: 'Past Month',
          fill: 'start',
          data: prev,
          backgroundColor: 'rgba(255,65,105,0.1)',
          borderColor: 'rgba(255,65,105,1)',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: 'rgba(255,65,105,1)',
          borderDash: [3, 3],
          borderWidth: 1,
          pointRadius: 0,
          pointHoverRadius: 2,
          pointBorderColor: 'rgba(255,65,105,1)',
        },
      ],
    };
  }
  smallStats = [
    {
      label: 'DAILY',
      value: daily,
      percentage: '4.7%',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '6', sm: '6' },
      datasets: [
        {
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(0, 184, 216, 0.1)',
          borderColor: 'rgb(0, 184, 216)',
          data: [1, 2, 1, 3, 5, 4, 7],
        },
      ],
    },
    {
      label: 'MONTHLY',
      value: monthly,
      percentage: '12.4',
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '6', sm: '6' },
      datasets: [
        {
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(23,198,113,0.1)',
          borderColor: 'rgb(23,198,113)',
          data: [1, 2, 3, 3, 3, 4, 4],
        },
      ],
    },
    {
      label: 'YEARLY',
      value: yearly,
      percentage: '3.8%',
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: '4', sm: '6' },
      datasets: [
        {
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: 'rgba(255,180,0,0.1)',
          borderColor: 'rgb(255,180,0)',
          data: [2, 3, 3, 3, 4, 3, 3],
        },
      ],
    },
  ];
  if (arr !== null && prev !== null) {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="User Dashboard"
            subtitle="dashboard"
            className="text-sm-left mb-3"
          />
        </Row>

        {/* Small Stats Blocks */}
        <Row>
          {smallStats.map((stats, idx) => (
            <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          ))}
        </Row>

        <Row>
          {/* Users Overview */}
          <Col lg="8" md="12" sm="12" className="mb-4">
            <UsersOverview title={'Total Record'} chartData={chartData} />
          </Col>

          {/* Users by Device */}
          <Col lg="4" md="6" sm="12" className="mb-4">
            <UsersByDevice />
          </Col>

          {/* Discussions */}
          <Col lg="5" md="12" sm="12" className="mb-4">
            <Mission />
          </Col>

          {/* Top Referrals */}
          <Col lg="3" md="12" sm="12" className="mb-4">
            <Ranking />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return jiwnoo;
    // return <div>jinwoo</div>;
  }
};

MainPage.propTypes = {
  smallStats: PropTypes.array,
};

export default MainPage;
