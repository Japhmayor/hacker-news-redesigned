import React from 'react';
import { Link } from 'react-router-dom';
import { COMMENT_DEPTH } from '../../constants';
import Meta from '../Meta/Meta';
import UserLink from '../UserLink/';
import { Author } from '../Meta/MetaItem';
import Time from '../Time';
import * as styles from './Comment.scss';
import parseText from '../../utils/parseText';



const Comment = ({ id, text, time, author, deleted, parent, parentPostID, commentIDs, comments, level, showParent }) => {

  if (deleted) {
    text = '[Deleted]';
  }

  const parentURL = (parent === parentPostID)
    ? `/post/${parent}`
    : `/comment/${parent}`;

  text = parseText(text); // TODO: Consider serving parsed from API

  return (
    <div className={styles.Comment}>
      <Meta>
        {author &&
          <Author>
            <UserLink to={`/user/${author}`} text={author} comment/>
          </Author>
        }

        <Time
          to={`/comment/${id}`}
          time={time}
        />

        {showParent &&
          <Link to={parentURL}>parent</Link>
        }
      </Meta>

      <div
        className={[styles.CommentBody + ' text']}
        dangerouslySetInnerHTML={{ __html: text }}
      />

      {commentIDs && commentIDs.length > 0 &&
        (
          // When maximum depth reached, render a link to the rest of the thread.
          level < COMMENT_DEPTH
          ? comments.map((comment) => <Comment key={comment.id} {...comment} level={level + 1} />)
          : <Link className={styles.CommentContinueThread} to={`/comment/${id}`}>Continue the thread</Link>
        )
      }
    </div>
  );
};

export default Comment;





// TODO: PropTypes

// TODO: Placeholders

// TODO: Comments should be collapsible. Collapsed comments are saved in localStorage.
//       Older than X days comments should be removed from localStorage for performance reasons.

// TODO: Would be kinda nice to parse links into titles or something, but not sure how and how costly it is.

// Below actions should ideally be performed on server as a single step, so the client gets clean parsed markup

// TODO: Detect internal links and swap/remove the domain so it links into this app. (only item and author)

// TODO: Replace <i> with <em>

