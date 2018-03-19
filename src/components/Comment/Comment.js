import React from 'react';
import styled from 'styled-components';
import { fontSizeSmall } from '../../styles/settings/typography';
import * as timeUtils from '../../utils/utils.time';
import { Author, Time } from '../Meta/MetaItem';
import EntryUserLink from '../Entry/EntryUserLink';
import Meta from '../Meta/Meta';
import { spacing } from '../../styles/settings/spacing';

const CommentWrapper = styled.div`
  margin-bottom: ${spacing(10)}; // TODO: Temporary
  font-size: ${fontSizeSmall};
`;

const CommentBody = styled.div`
  margin-top: ${spacing(2)};
`;

const Comment = ({ author, id, parent, text, time, deleted }) => {
  if (deleted) {
    // Skipping deleted comments for now.
    // Not sure if replies do deleted comments are being kept
    return null;
  }
  
  return (
    <CommentWrapper>
      <Meta>
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
    </CommentWrapper>
  );
};

export default Comment;
