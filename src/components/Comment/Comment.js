import React from 'react';
import styled from 'styled-components';
import { fontSizeSmall } from '../../styles/settings/typography';
import * as timeUtils from '../../utils/utils.time';
import { Author, Time } from '../Meta/MetaItem';
import EntryUserLink from '../Entry/EntryUserLink';
import Meta from '../Meta/Meta';
import { spacing } from '../../styles/settings/spacing';
import CommentContainer from '../../containers/CommentContainer';
import { blockquotify } from '../../utils/utils.string';

const CommentWrapper = styled.div`
  font-size: ${fontSizeSmall};
  margin-bottom: ${spacing(8)};
  
  & > & {
    margin: ${spacing(5)} 0 0 ${spacing(6)};
  }
`;

const CommentBody = styled.div`
  margin-top: ${spacing(2)};
  
  // Comment text from API is HTML, and a weird one.
  // This tweaks the spacing to ensure consistency.
  & > *:last-child {
    margin-bottom: 0;
  }
  
  p, blockquote, pre {
    margin-top: ${spacing(3)};
    margin-bottom: 0;
  }
  
  // blockquote:not(:first-child) {
  //   margin-top: ${spacing(6)};
  // }
`;

const Comment = ({ by: author, id, parent, text, time, deleted, kids: commentIDs }) => {
  if (deleted) {
    // Skipping deleted comments for now; not sure if replies to those are kept
    return null;
  }
  
  text = blockquotify(text); // TODO: Temporary. Serve text "blockquotified" from GraphQL
  
  return (
    <CommentWrapper>
      <Meta comment>
        {author &&
        <Author>
           <EntryUserLink href={`/${author}`}>{author}</EntryUserLink>
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

// TODO: Comments can collapse. Collapsed comments are saved in localStorage.
//       Older than X days comments should be removed from localStorage for performance reasons.

// TODO: Don't load collapsed comments

// TODO: Collapse ridiculous amount of threads, perhaps those that are way below the fold.

// TODO: Would be kinda nice to parse links into titles or something, but not sure how and how costly it is.
