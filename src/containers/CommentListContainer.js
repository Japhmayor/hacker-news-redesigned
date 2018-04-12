import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import CommentList from '../components/CommentList/CommentList';

const CommentListQuery = gql`
  query CommentListQuery($commentIDs: [ID!], $skip: Int, $limit: Int) {
    comments(commentIDs: $commentIDs, skip: $skip, limit: $limit) { # 0
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
  
  fragment CommentFields on Comment {
    id
    text
    time
    author
    deleted
    commentIDs
  }
`;

const CommentListContainer = ({ commentIDs }) => {
  return (
    <Query
      query={CommentListQuery}
      variables={{
        commentIDs,
        skip: 0,
        limit: 5,
      }}
      fetchPolicy="network-only"
    >
      {
        ({ data, loading, error, fetchMore }) => {
          if (loading) {
            return 'Loading';
          }

          if (error) {
            return 'Failed loading the post. Please try again';
          }

          return <CommentList
            comments={data.comments}
            onLoadMore={() => {
              fetchMore({
                variables: {
                  skip: data.comments.length,
                  limit: undefined
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) {
                    return prev;
                  }
                  return {
                    ...prev,
                    comments: [...prev.comments, ...fetchMoreResult.comments],
                  };
                },
              });
            }}
          />;
        }
      }
    </Query>
  );
};

export default CommentListContainer;

// Good example of super nested comments http://localhost:3050/post/16792638
