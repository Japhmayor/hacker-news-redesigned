import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Meta.scss';


const Meta = (props) => {
  const className = classNames(
    styles.Meta,
    styles[props.size],
  );

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

Meta.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};


export default Meta;
