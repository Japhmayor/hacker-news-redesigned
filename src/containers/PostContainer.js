import React from 'react';
import Post from '../components/Post/Post';
import { getEntry } from '../HNApi';

// Take a prop from router (id), fetch data, put to state, render Post


class PostContainer extends React.Component {
  state = {
    post: null,
    loading: true,
    error: false
  };
  
  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    // TODO: Probably need this when post links to another post
  }
  
  update = async () => { // TODO: Not a great name for this function. Rethink.
    this.setState({
      loading: true
    });
  
    const id = this.props.match.params.id;
    
    getEntry(id)
      .then(post => {
        this.setState({
          loading: false,
          post,
        });
      });
  };

  render() {
    if (this.state.loading) {
      return 'Loading';
    }
    
    if (this.state.error) {
      return 'Failed loading the post. Please try again';
    }
    
    return (
      <Post {...this.state.post}/>
    )
  }
}

export default PostContainer;

// TODO: Generic error design.
// TODO: PropTypes
