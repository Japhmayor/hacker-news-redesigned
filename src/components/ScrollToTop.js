import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Scroll restoration – https://reacttraining.com/react-router/web/guides/scroll-restoration
class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.object,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
