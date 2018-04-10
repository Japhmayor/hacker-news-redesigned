import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import getHostName from '../../utils/getHostname';

import Meta from '../Meta/Meta';
import { Author, Score } from '../Meta/MetaItem';
import UserLink from '../UserLink/';
import EntryLink from '../Entry/EntryLink';
import EntryHostname from '../Entry/EntryHostname';
import Time from '../Time';
import CommentList from '../CommentList/CommentList';
import { Poll } from '../Poll';
import * as styles from './Post.scss';

const Post = ({
  id, type, url, title, text, score, author, time, poll, commentCount, comments,
}) => {
  const isLink = url !== null;

  return (
    <Fragment>
      <article>
        <header className={styles.PostHeader}>
          <h1 className={styles.PostTitle}>
            {isLink ? (
              <Fragment>
                <EntryLink title={title} href={url} external={isLink} />

                <EntryHostname>({getHostName(url)})</EntryHostname>
              </Fragment>)
              : title}
          </h1>

          <Meta>
            {score &&
              <Score>+ {score}</Score>
            }

            {author &&
              <Author>
                by <UserLink to={`/user/${author}`} text={author} />
              </Author>
            }

            <Time
              to={`/post/${id}`}
              time={time}
            />
          </Meta>
        </header>

        {text &&
          <div
            className={styles.PostBody}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        }

        {type === 'poll' && poll &&
          <Poll {...poll} />
        }
      </article>

      {commentCount > 0
        ? <CommentList
          comments={comments}
          commentCount={commentCount}
        />
        : <h2 className={styles.CommentsEmptyState}>No one commented yet</h2>
      }
    </Fragment>
  );
};

Post.propTypes = {
  id:           PropTypes.string.isRequired,
  type:         PropTypes.string.isRequired,
  url:          PropTypes.string,
  title:        PropTypes.string.isRequired,
  text:         PropTypes.string,
  score:        PropTypes.number.isRequired,
  author:       PropTypes.string,
  time:         PropTypes.number.isRequired,
  poll:         PropTypes.shape({
    totalVotes: PropTypes.number.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        voteCount: PropTypes.number,
        percentage: PropTypes.number,
      }).isRequired
    ).isRequired,
  }),
  commentCount: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default Post;
