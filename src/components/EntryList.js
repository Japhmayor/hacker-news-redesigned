import React from 'react';
import Entry from './Entry';
import mockData from '../mock';

const EntryList = (props) => {
  const entries = mockData.map(entryData => {
    return (
      <Entry key={entryData.id} {...entryData} />
    );
  });
  
  return (
    <div className="entry-list">
      {entries}
    </div>
  );
};

export default EntryList;
