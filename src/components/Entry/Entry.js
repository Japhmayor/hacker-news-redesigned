import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Meta from '../Meta/Meta';
import { Author, Score } from '../Meta/MetaItem';
import Time from '../Time';
import getHostName from '../../utils/getHostname';
import COMMENT_LIST_QUERY from '../../queries/CommentList.graphql';
import EntryLink from './EntryLink';
import * as styles from './Entry.scss';

const Entry = ({ id, type, url, title, score, author, time, commentCount, commentIDs, onPrefetch }) => {
  const isJob = type === 'job';
  // Decide if external link
  const isLink = url !== null;
  url = isLink ? url : `/post/${id}`;

  return (
    <div
      className={styles.Entry}
      onMouseOver={() => onPrefetch(commentIDs, COMMENT_LIST_QUERY)}
    >
      <header className={styles.EntryTitle}>
        <EntryLink
          title={title}
          href={url}
          external={isLink}
        />

        {isLink &&
          <small>({getHostName(url)})</small>
        }
      </header>

      <Meta size="small">
        {score && type !== 'job' &&
          <Score score={score} />
        }

        {!isJob && author &&
          <Author name={author} />
        }

        <Time to={`/post/${id}`} time={time} />

        {Boolean(commentCount) &&
          <Link
            className={styles.EntryCommentLink}
            to={`/post/${id}`}
            aria-label={`${commentCount} comments. Visit the post page`}
            title={`${commentCount} comments`}
          >
            {commentCount}
          </Link>
        }
      </Meta>
    </div>
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
  commentIDs: PropTypes.array,
  onPrefetch: PropTypes.func,
};

export default Entry;

// TODO: Consider renaming Entry -> FeedItem
