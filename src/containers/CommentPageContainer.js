import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import PostPlaceholder from '../components/Post/PostPlaceholder';
import CommentPage from '../components/CommentPage/CommentPage';
import Error from '../components/Error';
import COMMENT_QUERY from '../queries/Comment.graphql';
import NotFound from '../components/HelperComponents/NotFound';

const CommentPageContainer = (props) => {
  const id = props.match.params.id;

  return (
    <Query
      query={COMMENT_QUERY}
      variables={{ id }}
    >
      {
        ({ data, loading, error }) => {
          if (loading) {
            return <PostPlaceholder />;
          }

          if (error) {
            return <Error
              type="error"
              text={`Could not load comments.`}
            />;
          }


          if (!data.comment) {
            return <NotFound
              text="The comment you’re looking for doesn’t exist."
            />;
          }

          return <CommentPage {...data.comment} />;
        }
      }
    </Query>
  );
};

CommentPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default CommentPageContainer;
