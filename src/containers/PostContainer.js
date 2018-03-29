import React from 'react';
import Post from '../components/Post/Post';
import { getEntry } from '../HNApi';
import PostPlaceholder from '../components/Post/PostPlaceholder';

class PostContainer extends React.Component {
  state = {
    post: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.update();
  }
  
  componentDidUpdate(prevProps) {
    const currentID = this.props.match.params.id;
    const prevID = prevProps.match.params.id;
    
    if (prevID !== currentID) {
      this.update();
    }
  }
  
  update = () => { // TODO: Not a great name for this function. Rethink.
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
      })
      .catch(error => {
        this.setState({ error: true });
        console.error(error)
      });
  };
  
  render() {
    if (this.state.loading) {
      return <PostPlaceholder/>
    }
    
    if (this.state.error) {
      return 'Failed loading the post. Please try again';
    }
    
    return (
      <Post {...this.state.post} />
    )
  }
}

export default PostContainer;

// TODO: Generic error design.
// TODO: PropTypes
