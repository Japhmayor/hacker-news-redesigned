import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import User from '../components/User/User';
import Error from '../components/Error';
import USER_QUERY from '../queries/User.graphql';
import NotFound from '../components/HelperComponents/NotFound';

const UserPageContainer = (props) => {
  const username = props.match.params.username;

  return (
    <Query
      query={USER_QUERY}
      variables={{ username }}
    >
      {
        ({ data, loading, error }) => {
          if (loading) {
            return 'Loading';
          }

          if (error) {
            return <Error text="Failed loading the user profile." />;
          }

          if (!data.user) {
            return <NotFound text="The user with that name doesn’t exist." />;
          }

          return <User {...data.user} />;
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
