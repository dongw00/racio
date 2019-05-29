import React from 'react';
import { Container, Row, Col } from 'shards-react';

import PageTitle from '../components/common/PageTitle';
import HistoryList from '../components/list/HistoryList';

const History = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="History" subtitle="map" className="text-sm-left mb-3" />
    </Row>

    {/* User's record history */}
    <Row>
      <Col lg="12" mg="12" sm="12" className="mb-4">
        <HistoryList data={data} />
      </Col>
    </Row>
  </Container>
);

const data = [
  {
    date: new Date(),
  },
  {
    date: new Date(1559055405589),
  },
  {
    date: new Date(1551004405589),
  },
];

export default History;
