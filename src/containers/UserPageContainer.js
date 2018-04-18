import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Post from '../components/Post/Post';
import PostPlaceholder from '../components/Post/PostPlaceholder';
import User from '../components/User/User';

// TODO: Remove commentIDs when done with comments
const UserQuery = gql`
  query UserQuery($username: String!) {
    user(username: $username) {
      username
      createdAt
      karma
      about
      submissions
    }
  }
`;

const UserPageContainer = (props) => {
  const username = props.match.params.username;

  return (
    <Query
      query={UserQuery}
      variables={{ username }}
      fetchPolicy="network-only"
    >
      {
        ({ data: { user } , loading, error }) => {
          if (loading) {
            return 'Loading';
          }

          if (error) {
            return 'Failed loading the user\'s page. Please try again';
          }

          return <User {...user}/>;
        }
      }
    </Query>
  );
};

UserPageContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default UserPageContainer;

// TODO: Deal with non existing usernames
