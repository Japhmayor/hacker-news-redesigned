import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Feed, { FeedPlaceholder } from '../components/Feed';
import { ENTRIES_PER_PAGE } from '../constants';
import FEED_QUERY from '../queries/Feed.graphql';
import Error from '../components/Error';

const FeedContainer = (props) => {
  const { feedName = 'top' } = props.match.params;
  let { page = '1' } = props.match.params;

  // GraphQL and other components expect page to be a number, router passes a string.
  page = parseInt(page, 10);

  return (
    <Query
      query={FEED_QUERY}
      variables={{
        feedName,
        page,
        limit: ENTRIES_PER_PAGE,
      }}
    >
      {
        ({ data, loading, error }) => {
          if (loading) {
            return (
              <FeedPlaceholder />
            );
          }

          if (error) {
            return <Error
              type="error"
              text={`Could not load the feed.`}
            />;
          }

          return <Feed
            entries={data.feed.posts}
            entryCount={data.feed.postCount}
            page={page}
            feedName={feedName}
          />;
        }
      }
    </Query>
  );
};

FeedContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
      feed: PropTypes.string,
    }),
  }).isRequired,
};

export default FeedContainer;

