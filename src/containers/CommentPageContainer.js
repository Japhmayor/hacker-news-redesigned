import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PostPlaceholder from '../components/Post/PostPlaceholder';
import CommentPage from '../components/CommentPage/CommentPage';

const CommentQuery = gql`
  query CommentQuery($id: ID!) {
    comment(id: $id) {
      id
      type
      text
      time
      author
      deleted
      parentPostID
      parentPostTitle
    }
  }
`;

const CommentPageContainer = (props) => {
  const id = props.match.params.id;

  return (
    <Query
      query={CommentQuery}
      variables={{ id }}
      fetchPolicy="network-only"
    >
      {
        ({ data, loading, error }) => {
          if (loading) {
            return <PostPlaceholder />;
          } // TODO: Make a comment page placholder?

          if (error) {
            return 'Failed loading the comment. Please try again';
          }

          return <CommentPage {...data.comment} />;
        }
      }
    </Query>
  );
};

export default CommentPageContainer;

// TODO: Compare (hostnames only or against empty string for referrer) and conditionally show Back button
//     console.log(document.referrer);
//     console.log(window.location.href);

// TODO: PropTypes
