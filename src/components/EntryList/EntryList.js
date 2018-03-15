import React from 'react';
import Entry from '../Entry/index';
import mockData from '../../mock';
import EntryListWrapper from './EntryListWrapper';

const EntryList = (props) => (
  <EntryListWrapper>
    {mockData.map(entryData => (
      <Entry key={entryData.id} {...entryData} />
    ))}
  </EntryListWrapper>
);

export default EntryList;
