import React, { Fragment } from 'react';

import * as timeUtils from '../../utils/utils.time';
import getHostName from '../../utils/getHostname';

import Meta from '../Meta/Meta';
import { Author, Score, Time } from '../Meta/MetaItem';
import EntryUserLink from '../Entry/EntryUserLink';
import EntryLink from '../Entry/EntryLink';
import EntryHostname from '../Entry/EntryHostname';

import PostBody from './PostBody';
import PostTitle from './PostTitle';
import PostHeader from './PostHeader';
import CommentList from '../CommentList/CommentList';
import { Link } from 'react-router-dom';


const Post = ({ id, title, url, text, score, by: author, time, descendants: commentCount, kids: comments }) => {
  const isLink = typeof url !== 'undefined';
  
  return (
    <Fragment>
      <article>
        <PostHeader>
          
          <PostTitle>
            {isLink ? (
              <Fragment>
                <EntryLink title={title} href={url} external={isLink} />
            
                <EntryHostname>({getHostName(url)})</EntryHostname>
              </Fragment> )
          
              : title }
          </PostTitle>
      
          <Meta large> {/* TODO: Larger font size would be nice. Make optional via prop*/}
            {score !== undefined && // Not sure if 0 or negative score is a thing. Never seen anything with score < 1
            <Score>+ {score}</Score>}
        
            {author &&
            <Author>
              by <EntryUserLink href={`/${author}`}>{author}</EntryUserLink>
            </Author>
            }
        
            <Time
              dateTime={timeUtils.getISOTime(time)}
              title={timeUtils.getExactTime(time)}
            >
              {timeUtils.getTimePassed(time)}
            </Time>
          </Meta>
          
        </PostHeader>
    
        <PostBody dangerouslySetInnerHTML={{ __html: text }} />
      </article>
  
      {/*<CommentList comments={comments}/>*/}
    </Fragment>
  );
};

export default Post;

// TODO: No way of recognizing and rendering a poll
