import React from 'react';
import PropTypes from 'prop-types';
import Error from '../Error/index';
import Status from './Status';

const NotFound = (props) => (
  <Status code={404}>
    <Error type="notfound" text={props.text} />
  </Status>
);

NotFound.propTypes = {
  text: PropTypes.string,
};

export default NotFound;
