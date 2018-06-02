import React, { Fragment } from 'react';
import { ENTRIES_PER_PAGE } from '../../constants';
import Repeat from '../HelperComponents/Repeat';
import EntryPlaceholder from '../Entry/EntryPlaceholder';

const FeedPlaceholder = (props) => (
  <Fragment>
    <Repeat times={ENTRIES_PER_PAGE}>
      <EntryPlaceholder />
    </Repeat>
  </Fragment>
);

export default FeedPlaceholder;

