import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'shards-react';

import PageTitle from '../components/common/PageTitle';
import HistoryList from '../components/list/HistoryList';

import ReadLog, { parseData } from '../parse/Parser';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    parseData()
      .then(logs => {
        /* Sort by recent date */
        logs.sort((o1, o2) => {
          if (o1.header.time > o2.header.time) return -1;
          else if (o1.header.time < o2.header.time) return 1;
          else return 0;
        });
        this.setState({ data: logs });
      })
      .then(() => console.log(this.state.data));
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="History"
            subtitle="map"
            className="text-sm-left mb-3"
          />
        </Row>

        {/* Read Log File */}
        <Row>
          <Col>
            <ReadLog />
          </Col>
        </Row>

        {/* User's record history */}
        <Row>
          <Col lg="12" mg="12" sm="12" className="mb-4">
            <HistoryList data={this.state.data} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default History;
