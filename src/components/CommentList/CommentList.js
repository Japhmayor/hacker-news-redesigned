import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

class CommentList extends React.Component {
  componentDidMount() {
    setTimeout(this.props.onLoadMore, 100);
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment) =>
          <Comment key={comment.id} {...comment} level={0}/>,
        )}
      </div>
    )
  }
}


CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentList;

// TODO: Sorting dropdown (Top/Recent). See the sketch file
