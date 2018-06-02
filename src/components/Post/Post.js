import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import getHostName from '../../utils/getHostname';
import Head from '../Head';
import Meta from '../Meta/Meta';
import { Author, Score } from '../Meta/MetaItem';
import UserLink from '../UserLink/';
import EntryLink from '../Entry/EntryLink';
import Time from '../Time';
import Poll from '../Poll';
import CommentListContainer from '../../containers/CommentListContainer';
import * as styles from './Post.scss';

const Post = ({ id, type, url, title, text, score, author, time, poll, commentCount, commentIDs }) => {
  const isLink = url !== null;

  return (
    <Fragment>
      <Head
        url={`/post/${id}`}
        title={title}
        description={text || undefined}
      />

      <article>
        <header className={styles.PostHeader}>
          <h1 className={styles.PostTitle}>
            {isLink ? (
              <Fragment>
                <EntryLink title={title} href={url} external={isLink} />

                <small>({getHostName(url)})</small>
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
          className={`${styles.PostBody} text`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        }

        {type === 'poll' && poll &&
        <Poll {...poll} />
        }
      </article>

      {commentCount > 0
        ? <Fragment>
          <h2 className={styles.PostCommentsTitle}>{commentCount} Comments</h2>

        </Fragment>
        : type !== 'job' && <h2 className={styles.PostCommentsEmptyState}>No one commented yet</h2>
      }

      {commentCount > 0 &&
      <CommentListContainer
        commentCount={commentCount}
        commentIDs={commentIDs}
      />
      }
    </Fragment>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  score: PropTypes.number.isRequired,
  author: PropTypes.string,
  time: PropTypes.number.isRequired,
  poll: PropTypes.shape({
    totalVotes: PropTypes.number.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        voteCount: PropTypes.number,
        percentage: PropTypes.number,
      }).isRequired,
    ).isRequired,
  }),
  commentCount: PropTypes.number,
  commentIDs: PropTypes.arrayOf(PropTypes.string),
};

export default Post;
