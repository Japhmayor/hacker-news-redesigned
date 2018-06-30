import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { pageview } from '../../utils/ga';

class Analytics extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes,
    }).isRequired,
  };

  componentDidUpdate(prevProps) {
    // Send a `pageview` to Google Analytics whenever the path changes.
    //
    // The call is wrapped into `requestAnimationFrame` to prevent previous
    // title from being reported instead of the current one.
    // The issue is likely related to how `react-helmet` (and its dependency `react-side-effect`)
    // update the title. https://github.com/nfl/react-helmet/issues/189
    if (this.props.location !== prevProps.location) {
      window.requestAnimationFrame(() => {
        pageview(this.props.location.pathname);
      });
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Analytics);
