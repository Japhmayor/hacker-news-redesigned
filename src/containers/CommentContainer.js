import React from 'react';
import PropTypes from 'prop-types';
import { getEntry } from '../HNApi';
import Comment from '../components/Comment/Comment';

class CommentContainer extends React.Component {
  static propTypes = {
    commentID: PropTypes.number.isRequired
  };
  
  state = {
    comment: {},
    loading: true
  };
  
  componentDidMount() {
    this.update();
  }
  
  update = () => {
    this.setState({
      loading: true
    });
    
    getEntry(this.props.commentID)
      .then(comment => {
        this.setState({
          comment,
          loading: false,
        });
      });
  };

  render() {
    if (this.state.loading) {
      return 'Loading';
    }
    
    return <Comment {...this.state.comment}/>
  }
}



export default CommentContainer;
