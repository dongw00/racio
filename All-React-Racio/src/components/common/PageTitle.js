import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Col } from 'shards-react';

const PageTitle = ({ title, subtitle, className, ...attrs }) => {
  const classes = classNames(
    className,
    'text-center',
    'text-md-left',
    'mb-sm-0'
  );

  return (
    <Col xs="12" sm="6" className={classes} {...attrs}>
      <h3 className="page-title">{title}</h3>
      <span className="text-uppercase page-subtitle">{subtitle}</span>
    </Col>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default PageTitle;
