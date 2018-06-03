import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Post from '../components/Post/Post';
import PostPlaceholder from '../components/Post/PostPlaceholder';
import Error from '../components/Error';
import POST_QUERY from '../queries/Post.graphql';
import NotFound from '../components/HelperComponents/NotFound';

const PostContainer = (props) => {
  const id = props.match.params.id;

  return (
    <Query
      query={POST_QUERY}
      variables={{ id }}
    >
      {
        ({ data, loading, error }) => {
          if (loading) {
            return <PostPlaceholder />;
          }

          if (error) {
            return <Error text="Failed loading the post." />;
          }

          if (!data.post) {
            return <NotFound
              text="The post you’re looking for doesn’t exist."
            />;
          }

          return <Post {...data.post} />;
        }
      }
    </Query>
  );
};

PostContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default PostContainer;
