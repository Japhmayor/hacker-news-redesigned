import React, { Fragment } from 'react';

import getHostName from '../../utils/getHostname';

import Meta from '../Meta/Meta';
import { Author, Score } from '../Meta/MetaItem';
import EntryUserLink from '../Entry/EntryUserLink';
import EntryLink from '../Entry/EntryLink';
import EntryHostname from '../Entry/EntryHostname';
import Time from '../Time';

import PostBody from './PostBody';
import PostTitle from './PostTitle';
import PostHeader from './PostHeader';
import CommentList from '../CommentList/CommentList';

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

          <Meta>
            {score &&
            <Score>+ {score}</Score>}

            {author &&
            <Author>
              by <EntryUserLink href={`/user/${author}`}>{author}</EntryUserLink>
            </Author>
            }
  
            <Time
              to={`/post/${id}`}
              time={time}
            />
          </Meta>

        </PostHeader>

        <PostBody dangerouslySetInnerHTML={{ __html: text }} />
      </article>

      {commentCount > 0 &&
        <CommentList commentIDs={comments} commentCount={commentCount}/>
      }
    </Fragment>
  );
};

export default Post;

// TODO: Add a plecholder
// TODO: Need to recognize and rendering a poll https://news.ycombinator.com/item?id=2595605
