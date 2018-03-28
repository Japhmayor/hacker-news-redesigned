import React from 'react';
import * as timeUtils from '../../utils/utils.time';
import { blockquotify } from '../../utils/utils.string';

import CommentContainer from '../../containers/CommentContainer';
import CommentWrapper from './CommentWrapper';
import Meta from '../Meta/Meta';
import EntryUserLink from '../Entry/EntryUserLink';
import { Author, Time } from '../Meta/MetaItem';

import CommentBody from './CommentBody';




const Comment = ({ by: author, id, parent, text, time, deleted, kids: commentIDs }) => {
  if (deleted) {
    // Skipping deleted comments for now; not sure if replies to those are kept
    return null;
  }
  
  text = blockquotify(text); // TODO: Temporary. Serve text "blockquotified" from GraphQL
  
  return (
    <CommentWrapper>
      <Meta>
        {author &&
        <Author>
           <EntryUserLink href={`/${author}`} comment>
             {author}
           </EntryUserLink>
        </Author>
        }
    
        <Time
          dateTime={timeUtils.getISOTime(time)}
          title={timeUtils.getExactTime(time)}
        >
          {timeUtils.getTimePassed(time)}
        </Time>
      </Meta>
      
      <CommentBody dangerouslySetInnerHTML={{ __html: text }} />
      
      {commentIDs && commentIDs.length > 0 &&
        commentIDs.map(id => <CommentContainer key={id} commentID={id} />)
      }
    </CommentWrapper>
  );
};

export default Comment;



// TODO: Some <pre> shit needs to be handled.
//       See an example here https://news.ycombinator.com/item?id=16667036
//       Limit width, overflow-x: auto

// TODO: Placeholders

// TODO: Comments should be collapsible. Collapsed comments are saved in localStorage.
//       Older than X days comments should be removed from localStorage for performance reasons.

// TODO: Comments have their own page (similar to post)

// TODO: Don't load collapsed comments

// TODO: Collapse ridiculous amount of threads, perhaps those that are way below the fold.

// TODO: Avoid rendering more than 5-7 replies per thread, instead link to the comment (now that comments have pages;)

// TODO: Would be kinda nice to parse links into titles or something, but not sure how and how costly it is.
