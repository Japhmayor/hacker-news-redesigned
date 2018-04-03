import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Entry from '../Entry/index';
import { DirectionalNav } from '../DirectionalNav/';
import { NextLink, PrevLink } from '../DirectionalNav';
import { ENTRIES_PER_PAGE } from '../../constants';


const EntryList = ({ entries, entryCount, feed, page }) => {
  const pageCount = Math.ceil(
    entryCount / ENTRIES_PER_PAGE
  );
  
  // Make sure top feed is just homepage: i.e. top -> "/", top page 2 -> "/2"
  const baseUrl = feed !== 'top' ? `/${feed}` : '';
  
  // Don't add "/1" to the path
  const prevUrl = (page === 2)
    ? baseUrl
    : `${baseUrl}/${page - 1}`;
  
  const nextUrl = `${baseUrl}/${page + 1}`;
  
  return (
    <Fragment>
      {entries.map(entry => (
        <Entry key={entry.id} {...entry} />
      ))}
      
      {entryCount > ENTRIES_PER_PAGE &&
        <DirectionalNav>
          {page > 1 &&
            <PrevLink
              to={prevUrl}>
              Previous
            </PrevLink>
          }
          
          {page < pageCount &&
            <NextLink
              to={nextUrl}>
              Next
            </NextLink>
          }
        </DirectionalNav>
      }
    </Fragment>
  );
};

EntryList.defaultProps = {
  page: '1',
  feed: 'top',
};

EntryList.propTypes = {
  entries: PropTypes.array.isRequired,
  entryCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default EntryList;

// TODO: Consider renaming EntryList -> Feed, Entry -> FeedItem
