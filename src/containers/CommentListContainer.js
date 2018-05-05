import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import CommentList from '../components/CommentList/CommentList';
import COMMENT_LIST_QUERY from '../queries/CommentList.graphql';
import CommentListPlaceholder from '../components/CommentList/CommentListPlaceholder';

const CommentListContainer = ({ commentIDs }) => (
  <Query
    query={COMMENT_LIST_QUERY}
    variables={{
      commentIDs,
      skip: 0,
      limit: 5,
    }}
  >
    {
      ({ data, loading, error, fetchMore }) => {
        if (loading) {
          return <CommentListPlaceholder />;
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
                skip: 0,
                limit: undefined,
              },
              updateQuery: (prev, {fetchMoreResult}) => {
                if (!fetchMoreResult) return prev;
                return fetchMoreResult;
              }
            })}
          />);
      }
    }
  </Query>
);

CommentListContainer.propTypes = {
  commentIDs: PropTypes.arrayOf(PropTypes.string),
};

export default CommentListContainer;

// Good example of super nested comments http://localhost:3050/post/16792638
