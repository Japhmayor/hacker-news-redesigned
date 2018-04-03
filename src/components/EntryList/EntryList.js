import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Entry from '../Entry/index';
import { DirectionalNav } from '../DirectionalNav/';
import { NextLink, PrevLink } from '../DirectionalNav';
import { ENTRIES_PER_PAGE } from '../../constants';


const EntryList = ({ entries, entryCount, feedName, page }) => {
  const pageCount = Math.ceil(
    entryCount / ENTRIES_PER_PAGE
  );
  
  // Make sure top feed is just homepage: i.e. top -> "/", top page 2 -> "/2"
  const baseUrl = feedName !== 'top' ? `/${feedName}` : '';
  
  // 1. Show "Previous" link starting from the second page
  // 2. Don't display "Next" link on the last page
  // 3. Display `:feedName/` instead of `:feedName/1` when on first page.
  const dirNavProps = {
    shown: entryCount > ENTRIES_PER_PAGE,
    prevLinkShown: page > 1, //[1]
    nextLinkShown: page < pageCount, // [2]
    prevUrl: (page === 2) ? baseUrl : `${baseUrl}/${page - 1}`, // [3]
    nextUrl: `${baseUrl}/${page + 1}`,
  };
  
  return (
    <Fragment>
      {entries.map(entry => (
        <Entry key={entry.id} {...entry} />
      ))}
      
      <DirectionalNav {...dirNavProps} />
    </Fragment>
  );
};

EntryList.defaultProps = {
  page: '1',
  feedName: 'top',
};

EntryList.propTypes = {
  entries: PropTypes.array.isRequired,
  entryCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default EntryList;

// TODO: Consider renaming EntryList -> Feed, Entry -> FeedItem
