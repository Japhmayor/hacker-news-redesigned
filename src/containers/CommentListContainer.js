import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import CommentList from '../components/CommentList/CommentList';
import Error from '../components/Error';
import CommentListPlaceholder from '../components/CommentList/CommentListPlaceholder';
import COMMENT_LIST_QUERY from '../queries/CommentList.graphql';

const CommentListContainer = ({ commentIDs }) => (
  <Query
    query={COMMENT_LIST_QUERY}
    variables={{
      commentIDs,
    }}
  >
    {
      ({ data, loading, error }) => {
        if (loading) {
          return <CommentListPlaceholder />;
        }

        if (error) {
          return <Error text="Failed loading comments." />;
        }

        return (
          <CommentList
            comments={data.comments}
          />);
      }
    }
  </Query>
);

CommentListContainer.propTypes = {
  commentIDs: PropTypes.arrayOf(PropTypes.string),
};

export default CommentListContainer;

