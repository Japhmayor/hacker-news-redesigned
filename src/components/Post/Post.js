import React, { Fragment } from 'react';
import * as timeUtils from '../../utils/utils.time';
import EntryTitle from '../Entry/EntryTitle';
import EntryMeta from '../Entry/EntryMeta';
import { EntryAuthor, EntryScore, EntryTime } from '../Entry/EntryMetaItem';
import EntryUserLink from '../Entry/EntryUserLink';
import PostBody from './PostBody';
import PostTitle from './PostTitle';
import PostHeader from './PostHeader';

const Post = ({ id, title, text, score, author, time, commentCount }) => {
  console.log(text);
  
  return (
    <article>
      <PostHeader>
        <PostTitle>
          {title}
        </PostTitle>
  
        <EntryMeta> {/* TODO: Larger font size would be nice. Make optional via prop*/}
          {score !== undefined && // Not sure if 0 or negative score is a thing. Never seen anything with score < 1
          <EntryScore>+ {score}</EntryScore>}
    
          {author &&
          <EntryAuthor>
            by <EntryUserLink href={`/${author}`}>{author}</EntryUserLink>
          </EntryAuthor>}
    
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
