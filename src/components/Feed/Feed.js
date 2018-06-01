import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withApollo } from 'react-apollo';
import debounce from 'lodash/debounce';
import Entry from '../Entry';
import DirectionalNav from '../DirectionalNav/';
import { ENTRIES_PER_PAGE } from '../../constants';
import Head from '../Head';
import { capitalize } from '../../utils/utils.string';

const Feed = ({ entries, entryCount, feedName, page, client }) => {
  const pageCount = Math.ceil(
    entryCount / ENTRIES_PER_PAGE,
  );

  // Make sure the top feed is just homepage: i.e. top -> "/", top page 2 -> "/2"
  const baseUrl = feedName !== 'top' ? `/${feedName}` : '';

  // 1. Show "Previous" link starting from the second page
  // 2. Don't display "Next" link on the last page
  // 3. Display `:feedName/` instead of `:feedName/1` when on first page.
  const dirNavProps = {
    shown: entryCount > ENTRIES_PER_PAGE,
    prevLinkShown: page > 1, // [1]
    nextLinkShown: page < pageCount, // [2]
    prevUrl: page === 2 ? baseUrl : `${baseUrl}/${page - 1}`, // [3]
    nextUrl: `${baseUrl}/${page + 1}`,
  };

  // Prefetch comments on Entry mouse over.
  // Debouncing is used to avoid unnecessary prefetching when cursor just travels over entries.
  // A single function is shared across all rendered entries to make debounce possible.
  const preFetch = debounce(
    (commentIDs, query) => {
      if (commentIDs && commentIDs.length > 0) {
        client.query({
          query,
          variables: {
            commentIDs,
          },
        });
      }
    },
    300,
    {
      leading: true,
      trailing: true,
    },
  );

  return (
    <Fragment>
      <Head title={capitalize(feedName)} />

      <section>
        <h1 className="u-sr-only">{`Feed: ${feedName}`}</h1>

        {entries.map((entry) => (
          <Entry key={entry.id} {...entry} onPrefetch={preFetch} />
        ))}
      </section>

      <DirectionalNav {...dirNavProps} />
    </Fragment>
  );
};

Feed.defaultProps = {
  page: 1,
  feedName: 'top',
};

Feed.propTypes = {
  entries: PropTypes.array.isRequired,
  entryCount: PropTypes.number.isRequired,
  feedName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  client: PropTypes.object,
};

export default withApollo(Feed);
