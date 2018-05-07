import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import deepSlice from '../../utils/deepSlice';

// When visiting from feed, React delays the page switch until CommentList
// is mounted, and with large amount of comments the delay becomes very noticable.
// Comments are loaded incrementally in two steps. This results in rendering initial chunk of
// comments instantenously and improved perceived performance.
// 1. Render 10 comments instantly
// 2. Render remaining comments on next frame.
// TODO: Ideally deferring logic should kick in if total comment count is > ~120

class CommentList extends React.Component {
  state = {
    comments: deepSlice(this.props.comments, 10), // [1]
  };

  componentDidMount() {
    const comments = this.props.comments;

    this.raf = window.requestAnimationFrame(() => { // [2]
      this.recursiveRaf = window.requestAnimationFrame(() =>
        this.setState({
          comments,
        }));
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) =>
          <Comment key={comment.id} {...comment} level={0} />,
        )}
      </div>
    );
  }
}


CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  onLoadMore: PropTypes.func,
};

export default CommentList;

// TODO: Sorting dropdown (Top/Recent). See the sketch file
