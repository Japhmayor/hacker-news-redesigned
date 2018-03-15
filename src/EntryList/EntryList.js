import React from 'react';
import Entry from '../components/Entry/';
import mockData from '../mock';
import EntryListWrapper from './EntryListWrapper';

const EntryList = (props) => (
  <EntryListWrapper className="entry-list">
    {mockData.map(entryData => (
      <Entry key={entryData.id} {...entryData} />
    ))}
  </EntryListWrapper>
);

export default EntryList;
