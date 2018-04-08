import React from 'react';
import PropTypes from 'prop-types';
import Meta from '../Meta/Meta';
import { Author, Score } from '../Meta/MetaItem';
import Time from '../Time';
import getHostName from '../../utils/getHostname';
import EntryWrapper from './EntryWrapper';
import EntryTitle from './EntryTitle';
import EntryLink from './EntryLink';
import EntryHostname from './EntryHostname';
import EntryUserLink from './EntryUserLink';
import EntryCommentLink from './EntryCommentLink';

const Entry = ({
  id, type, url, title, score, author, time, commentCount,
}) => {
  const isJob = type === 'job';
  // Decide if external link
  const isLink = url !== null;
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

        {Boolean(commentCount) &&
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

Entry.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  author: PropTypes.string,
  time: PropTypes.number.isRequired,
  commentCount: PropTypes.number,
};

export default Entry;


