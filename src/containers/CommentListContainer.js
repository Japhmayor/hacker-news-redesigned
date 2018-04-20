import React from 'react';
import { Query } from 'react-apollo';
import CommentList from '../components/CommentList/CommentList';
import COMMENT_LIST_QUERY from '../queries/CommentList.graphql';

const CommentListContainer = ({ commentIDs }) => (
  <Query
    query={COMMENT_LIST_QUERY}
    variables={{
      commentIDs,
      skip: 0,
      // limit: 5,
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
                limit: undefined,
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

export default CommentListContainer;

// Good example of super nested comments http://localhost:3050/post/16792638
