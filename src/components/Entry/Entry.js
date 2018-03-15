import React from 'react';
import * as timeUtils from '../../utils/utils.time';
import getHostName from '../../utils/getHostname';
import EntryWrapper from './EntryWrapper';
import EntryTitle from './EntryTitle';
import EntryLink from './EntryLink';
import EntryHostname from './EntryHostname';
import EntryMeta from './EntryMeta';
import { EntryMetaItem, EntryScore, EntryTime } from './EntryMetaItem';
import EntryUserLink from './EntryUserLink';
import EntryCommentLink from './EntryCommentLink';

const Entry = ({ by, score, time, title, url, descendants, text }) => {
  // type: story
  // type: job ( just title and date)
  // type: poll (maybe)
  
  
  // When the entry doesn't have `url`, but has `text` instead (ask, show, job)
  // url should point to the entry in that case, not to outside link.
  
  return (
    <EntryWrapper>
      <EntryTitle>
        <EntryLink href={url}>
          {title}
        </EntryLink>
        
        <EntryHostname>({getHostName(url)})</EntryHostname>
        {/* Don't render if show/ask */}
      </EntryTitle>
      
      <EntryMeta>
        <EntryScore>+ {score}</EntryScore>
        
        <EntryMetaItem>
          by <EntryUserLink href={`/${by}`}>{by}</EntryUserLink>
        </EntryMetaItem>
        
        <EntryTime
          dateTime={timeUtils.getISOTime(time)}
          title={timeUtils.getExactTime(time)}
        >
          {timeUtils.getTimePassed(time)}
        </EntryTime>
        
        <EntryCommentLink href="" aria-label={`${descendants} comments`}>
          {descendants}
        </EntryCommentLink>
      </EntryMeta>
    </EntryWrapper>
  );
};

export default Entry;
