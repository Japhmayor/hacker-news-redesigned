import React, { Fragment } from 'react';

import * as timeUtils from '../../utils/utils.time';
import getHostName from '../../utils/getHostname';

import EntryMeta from '../Entry/EntryMeta';
import { EntryAuthor, EntryScore, EntryTime } from '../Entry/EntryMetaItem';
import EntryUserLink from '../Entry/EntryUserLink';
import EntryLink from '../Entry/EntryLink';
import EntryHostname from '../Entry/EntryHostname';

import PostBody from './PostBody';
import PostTitle from './PostTitle';
import PostHeader from './PostHeader';
import CommentList from '../CommentList/CommentList';


const Post = ({ id, title, url, text, score, author, time, commentCount }) => {
  const isLink = typeof url !== 'undefined';
  
  return (
    <article>
      <PostHeader>
        <PostTitle>
          {isLink ? (
            <Fragment>
              <EntryLink href={url}>
                {title}
              </EntryLink>
          
              <EntryHostname>({getHostName(url)})</EntryHostname>
            </Fragment> )
            
          : title }
        </PostTitle>
  
        <EntryMeta large> {/* TODO: Larger font size would be nice. Make optional via prop*/}
          {score !== undefined && // Not sure if 0 or negative score is a thing. Never seen anything with score < 1
          <EntryScore>+ {score}</EntryScore>}
    
          {author &&
          <EntryAuthor>
            by <EntryUserLink href={`/${author}`}>{author}</EntryUserLink>
          </EntryAuthor>
          }
    
          <EntryTime
            dateTime={timeUtils.getISOTime(time)}
            title={timeUtils.getExactTime(time)}
          >
            {timeUtils.getTimePassed(time)}
          </EntryTime>
        </EntryMeta>
      </PostHeader>

      <PostBody dangerouslySetInnerHTML={{ __html: text }} />
    </article>
  );
};

export default Post;
