import React from 'react';
import PropTypes from 'prop-types';
import * as timeUtils from '../../utils/utils.time';
import getHostName from '../../utils/getHostname';
import EntryWrapper from './EntryWrapper';
import EntryTitle from './EntryTitle';
import EntryLink from './EntryLink';
import EntryHostname from './EntryHostname';
import Meta from '../Meta/Meta';
import { Author, Score } from '../Meta/MetaItem';
import EntryUserLink from './EntryUserLink';
import EntryCommentLink from './EntryCommentLink';
import Time from '../Time';

const Entry = ({ id, type, url, title, text, score, by: author, time, descendants: commentCount }) => {
  const isJob = (type === 'job');
  // Decide or not is an external link
  let isLink = typeof url !== 'undefined';
  url = isLink ? url : `/post/${id}`;
  
  return (
    <EntryWrapper>
      <EntryTitle>
        <EntryLink
          title={title}
          href={url}
          external={isLink}
        />
        
        {isLink &&
          <EntryHostname>({getHostName(url)})</EntryHostname>
        }
      </EntryTitle>
      
      <Meta small>
        {score !== undefined && // Not sure if 0 or negative score is a thing. Never seen anything with score < 1
        <Score>+ {score}</Score>}
        
        {!isJob && author &&
        <Author>
          by <EntryUserLink href={`/user/${author}`}>{author}</EntryUserLink>
        </Author>
        }
        
        <Time
          to={`/post/${id}`}
          time={time}
        />
        
        {!!commentCount &&
        <EntryCommentLink
          to={`/post/${id}`}
          title={`${commentCount} comments`}
        >
          {commentCount}
        </EntryCommentLink>
        }
      </Meta>
    </EntryWrapper>
  );
};

// TODO: Change accordingly when switching to GraphQL
//       id -> string
//       by -> rename to author
//       descendants -> rename to commentCount
Entry.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  by: PropTypes.string,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number,
};

export default Entry;


