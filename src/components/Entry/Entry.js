import React from 'react';
import * as timeUtils from '../../utils/utils.time';
import getHostName from '../../utils/getHostname';
import EntryWrapper from './EntryWrapper';
import EntryTitle from './EntryTitle';
import EntryLink from './EntryLink';
import EntryHostname from './EntryHostname';
import EntryMeta from './EntryMeta';
import { EntryAuthor, EntryScore, EntryTime } from './EntryMetaItem';
import EntryUserLink from './EntryUserLink';
import EntryCommentLink from './EntryCommentLink';

const Entry = ({ id, type, url, title, text, score, by, time, descendants }) => {
  const isJob = (type === 'job');
  let isLink = false;
  
  if (typeof url !== 'undefined') {
    isLink = true;
  }
  else {
    url = `/${id}`;
  }
  
  return (
    <EntryWrapper>
      <EntryTitle>
        <EntryLink href={url}>
          {title}
        </EntryLink>
        
        {isLink &&
        <EntryHostname>({getHostName(url)})</EntryHostname>
        }
      </EntryTitle>
      
      <EntryMeta>
        {!isJob &&
        <EntryScore>+ {score}</EntryScore>}
  
        {!isJob &&
        <EntryAuthor>
          by <EntryUserLink href={`/${by}`}>{by}</EntryUserLink>
        </EntryAuthor>}
        
        <EntryTime
          dateTime={timeUtils.getISOTime(time)}
          title={timeUtils.getExactTime(time)}
        >
          {timeUtils.getTimePassed(time)}
        </EntryTime>
  
        {!isJob &&
        <EntryCommentLink href="" title={`${descendants} comments`}>
          {descendants}
        </EntryCommentLink>}
      </EntryMeta>
    </EntryWrapper>
  );
};

export default Entry;
