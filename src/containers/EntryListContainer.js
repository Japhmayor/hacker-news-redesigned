import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EntryList from '../components/EntryList'
import EntryPlaceholder from '../components/Entry/EntryPlaceholder';
import Repeat from '../components/Repeat';
import { ENTRIES_PER_PAGE } from '../constants';

const FeedQuery = gql`
  query FeedQuery($feedName: String!, $page: Int!, $limit: Int!) {
    feed(feedName: $feedName, page: $page, limit: $limit) {
      postCount
      posts {
        id
        type
        title
        url
        text
        score
        time
        author
        commentCount
      }
    }
  }
`;

const EntryListContainer = (props) => {
  let { feedName = 'top', page = '1' } = props.match.params;
  
  // GraphQL and other components expect page to be a number, router passes a string.
  page = parseInt(page, 10);
  
  return (
    <Query
      query={FeedQuery}
      variables={{ feedName, page, limit: ENTRIES_PER_PAGE }}
    >
      {
        ({ data, loading, error }) => {
          if (loading) {
            return (
              <Repeat times={ENTRIES_PER_PAGE}>
                <EntryPlaceholder/>
              </Repeat>
            );
          }
          
          if (error) return <div>Something went wrong. Please try again/*TODO: Link/Button?*/</div>;
  
          return <EntryList
            entries={data.feed.posts}
            entryCount={data.feed.postCount}
            page={page}
            feedName={feedName}
          />
        }
      }
    </Query>
  );
};

EntryListContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
      feed: PropTypes.string,
    })
  }).isRequired
};

export default EntryListContainer;

// TODO: Rename this to FeedContainer for fuck's sake
