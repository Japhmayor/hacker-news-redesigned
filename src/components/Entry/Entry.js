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

const Entry = ({ id, type, url, title, text, score, author, time, commentCount }) => {
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
        {score !== undefined && // Not sure if 0 or negative score is a thing. Never seen anything with score < 1
        <EntryScore>+ {score}</EntryScore>}
  
        {!isJob && author &&
        <EntryAuthor>
          by <EntryUserLink href={`/${author}`}>{author}</EntryUserLink>
        </EntryAuthor>}
        
        <EntryTime
          dateTime={timeUtils.getISOTime(time)}
          title={timeUtils.getExactTime(time)}
        >
          {timeUtils.getTimePassed(time)}
        </EntryTime>
  
        {commentCount && commentCount > 0 && // check for descendants/kids instead ?
        <EntryCommentLink href="" title={`${commentCount} comments`}>
        {commentCount}
        </EntryCommentLink>}
      </EntryMeta>
    </EntryWrapper>
  );
};

export default Entry;
