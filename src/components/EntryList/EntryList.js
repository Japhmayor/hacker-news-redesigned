import React, { Fragment } from 'react';
import Entry from '../Entry/index';
import mockData from '../../mock-ask';

const EntryList = (props) => (
  <Fragment>
    {mockData.map(entryData => (
      <Entry key={entryData.id} {...entryData} />
    ))}
  </Fragment>
);

export default EntryList;
