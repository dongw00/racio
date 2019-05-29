import React from 'react';
import { Container, Row } from 'shards-react';

import PageTitle from '../components/common/PageTitle';
import MapComponent from '../components/maps/MapComponent';

import ReadLog from '../parse/Parser'

const History = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle
        title="Record"
        subtitle="map"
        className="text-sm-left mb-3"
      />
    </Row>
    
    {/* Read Log File */}
    <Row>
      <ReadLog />
    </Row>
    <MapComponent />
  </Container>
);

export default History;
