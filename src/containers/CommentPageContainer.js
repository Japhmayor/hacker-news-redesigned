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
      parent
      parentPostID
      parentPostTitle
      commentIDs
      comments {
        ...CommentFields
        comments { # 1
          ...CommentFields
          comments { # 2
            ...CommentFields
            comments { # 3
              ...CommentFields
              comments { # 4
                ...CommentFields
                comments { # 5
                  ...CommentFields
                  comments { #6
                    ...CommentFields
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  fragment CommentFields on Comment {
    id
    text
    time
    author
    deleted
    commentIDs
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

// TODO: PropTypes
