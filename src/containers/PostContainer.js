import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Post from '../components/Post/Post';
import PostPlaceholder from '../components/Post/PostPlaceholder';
import NotFound from '../components/NotFound/NotFound';

// TODO: Remove commentIDs when done with comments
const PostQuery = gql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      id
      title
      author
      type
      url
      text
      score
      time
      commentCount
      commentIDs
      poll {
        totalVotes
        options {
          text
          voteCount
          percentage
        }
      }
    }
  }
`;

const PostContainer = (props) => {
  const id = props.match.params.id;

  return (
    <Query
      query={PostQuery}
      variables={{ id }}
      fetchPolicy="network-only"
    >
      {
        ({ data, loading, error }) => {
          if (loading) {
            return <PostPlaceholder />;
          }

          if (error) {
            console.log(data);
            return 'Failed loading the post. Please try again';
          }

          if (!data.post) {
            return <NotFound text="The post you’re looking for doesn’t exist."/>;
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

// TODO: Generic error design.
