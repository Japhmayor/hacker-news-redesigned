import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import CommentList from '../components/CommentList/CommentList';
import COMMENT_LIST_QUERY from '../queries/CommentList.graphql';
import CommentListPlaceholder from '../components/CommentList/CommentListPlaceholder';

const CommentListContainer = ({ commentCount, score, commentIDs }) => {
  return (
    <Query
      query={COMMENT_LIST_QUERY}
      variables={{
        commentIDs,
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

