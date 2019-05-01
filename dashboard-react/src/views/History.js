import React from 'react';
import { Container, Row } from 'shards-react';

import PageTitle from '../components/common/PageTitle';
import MapComponent from '../components/maps/MapComponent';

const History = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        title="기록"
        subtitle="History"
        className="text-sm-left mb-3"
      />
    </Row>
    <MapComponent />
  </Container>
);

export default History;
