import React, { Fragment } from 'react';
import Entry from '../Entry/index';

const EntryList = ({entries}) => (
  <Fragment>
    {entries.map(entry => (
      <Entry key={entry.id} {...entry} />
    ))}
  </Fragment>
);

export default EntryList;
