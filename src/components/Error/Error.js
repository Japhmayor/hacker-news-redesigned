import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Error.scss';

const Error = ({ type, text }) => (
  <div className={styles.NotFound}>
    <h1  className={styles.NotFoundTitle}>
      {type === 'notfound'
        ? '404'
        : '500'}
    </h1>
    <p>{text}</p>

    {type === 'notfound' &&
      <p>If you believe this is an error, please <a href="https://github.com/tigranpetrossian/hnpwa/issues/new">open an issue at GitHub</a>.</p>
    }

    {type === 'error' &&
      <p>If you encounter this more than once, please <a href="https://github.com/tigranpetrossian/hnpwa/issues/new">open an issue on GitHub</a>.</p>
    }
  </div>
);

Error.defaultProps = {
  text: 'The page doesn\'t exist.',
};

Error.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['notfound', 'error']).isRequired,
};

export default Error;
