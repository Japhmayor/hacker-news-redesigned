import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import CommentList from '../components/CommentList/CommentList';
import COMMENT_LIST_QUERY from '../queries/CommentList.graphql';
import CommentListPlaceholder from '../components/CommentList/CommentListPlaceholder';

const CommentListContainer = ({ commentCount, score, commentIDs }) => {
  // Super scientific way of deciding the prefetch limit:
  // On popular posts the top most comments gets a lot of replies, enough to fill
  // the page on initial render. Remaining comment loading is deferred.
  // Basically, the larger is comment count and score, the fewer top level comments are loaded initially.
  const limit = Math.ceil(1000 / (commentCount + score));

  return (
    <Query
      query={COMMENT_LIST_QUERY}
      variables={{
        commentIDs,
        skip: 0,
        limit,
      }}
    >
      {
        ({ data, loading, error, fetchMore }) => {
          if (loading) {
            return <CommentListPlaceholder/>;
          }

          if (error) {
            return 'Failed loading the post. Please try again';
          }

          return (
            <CommentList
              comments={data.comments}
              onLoadMore={() => fetchMore({
                variables: {
                  commentIDs,
                  skip: limit,
                  limit: undefined,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) {
                    return prev;
                  }
                  return Object.assign({}, prev, {
                    comments: [...prev.comments, ...fetchMoreResult.comments],
                  });
                },
              })}
            />);
        }
      }
    </Query>
  );
};

CommentListContainer.propTypes = {
  commentIDs: PropTypes.arrayOf(PropTypes.string),
};

export default CommentListContainer;

