import React from 'react';
import { blockquotify } from '../../utils/utils.string';

import CommentContainer from '../../containers/CommentContainer';
import CommentWrapper from './CommentWrapper';
import Meta from '../Meta/Meta';
import EntryUserLink from '../Entry/EntryUserLink';
import { Author } from '../Meta/MetaItem';

import CommentBody from './CommentBody';
import Time from '../Time';


const Comment = ({ by: author, id, parent, text, time, deleted, dead, kids: commentIDs }) => {
  if (deleted || dead || !text) {
    // Skipping deleted comments for now; not sure if replies to those are kept
    // TODO: Rarely some comments come without text, these should be filtered in GraphQL
    return null;
  }
  
  text = blockquotify(text); // TODO: Temporary. Serve text "blockquotified" from GraphQL
  
  return (
    <CommentWrapper>
      <Meta>
        {author &&
        <Author>
           <EntryUserLink href={`/user/${author}`} comment>
             {author}
           </EntryUserLink>
        </Author>
        }
  
        <Time
          to={`/comment/${id}`}
          time={time}
        />
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


// Below actions should ideally be performed on server as a single step, so the client gets clean parsed markup

// TODO: Detect internal links and swap/remove the domain so it links into this app. (only item and author)

// TODO: Replace <i> with <em>

// TODO: Move blockquotify to GraphQL

// TODO: 16756114 -> `snippet` to <code> would be really nice
