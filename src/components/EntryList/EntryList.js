import React, { Fragment } from 'react';
import Entry from '../Entry/index';
import { DirectionalNav } from '../DirectionalNav/';
import { NextLink, PrevLink } from '../DirectionalNav';
import { ENTRIES_PER_PAGE } from '../../constants';

const EntryList = ({ entries, entryCount, page = '1', feed }) => {
  const currentPage = parseInt(page, 10);
  
  const pageCount = Math.ceil(
    entryCount / ENTRIES_PER_PAGE
  );
  
  // Make sure top feed is just homepage: i.e. top -> "/", top page 2 -> "/2"
  const baseUrl = feed ? `/${feed}` : '';
  // Don't render add "/1" to the path
  const prevUrl = (currentPage === 2) ? baseUrl : `${baseUrl}/${currentPage - 1}`;
  const nextUrl = `${baseUrl}/${currentPage + 1}`;
  
  return (
    <Fragment>
      {entries.map(entry => (
        <Entry key={entry.id} {...entry} />
      ))}
      
      {entryCount > ENTRIES_PER_PAGE &&
        <DirectionalNav>
          {currentPage > 1 &&
            <PrevLink
              to={prevUrl}>
              Previous
            </PrevLink>
          }
          
          {currentPage < pageCount &&
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

export default EntryList;
