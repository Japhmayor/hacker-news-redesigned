import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import getHostName from '../../utils/getHostname';

import Meta from '../Meta/Meta';
import { Author, Score } from '../Meta/MetaItem';
import EntryUserLink from '../Entry/EntryUserLink';
import EntryLink from '../Entry/EntryLink';
import EntryHostname from '../Entry/EntryHostname';
import Time from '../Time';

import PostHeader from './PostHeader';
import PostTitle from './PostTitle';
import PostBody from './PostBody';
import CommentList from '../CommentList/CommentList';
import CommentsEmptyState from '../CommentList/CommentsEmptyState';
import PollContainer from '../../containers/PollContainer';

const Post = ({ id, type, url, title, text, score, by: author, time, parts, descendants: commentCount, kids: comments }) => {
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
                </Fragment>)
              
              : title}
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
        
        {text &&
        <PostBody dangerouslySetInnerHTML={{ __html: text }} />
        }
        
        {type === 'poll' && parts && parts.length > 0 &&
        <PollContainer pollIDs={parts}/>
        }
      </article>
      
      {commentCount > 0
        ? <CommentList commentIDs={comments} commentCount={commentCount} />
        : <CommentsEmptyState>No one commented yet</CommentsEmptyState>
      }
    </Fragment>
  );
};


// TODO: Change accordingly when switching to GraphQL
//       id -> string
//       by -> rename to author
//       descendants -> rename to commentCount
Post.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  score: PropTypes.number.isRequired,
  by: PropTypes.string,
  time: PropTypes.number.isRequired,
  parts: PropTypes.array,
  descendants: PropTypes.number,
  kids: PropTypes.array,
};

export default Post;
