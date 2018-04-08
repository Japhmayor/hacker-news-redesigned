import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../components/Comment/Comment';

class CommentContainer extends React.Component {
  static propTypes = {
    commentID: PropTypes.number.isRequired,
  };

  state = {
    comment: {},
    loading: true,
  };

  render() {
    if (this.state.loading) {
      return 'Loading';
    }

    return <Comment {...this.state.comment} />;
  }
}

export default CommentContainer;
