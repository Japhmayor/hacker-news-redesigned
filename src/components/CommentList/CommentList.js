import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

class CommentList extends React.Component {
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
  onLoadMore: PropTypes.func,
};

export default CommentList;

// TODO: Sorting dropdown (Top/Recent). See the sketch file
