import React from 'react';
import CommentsTitle from './CommentTitle';
import CommentContainer from '../../containers/CommentContainer';

const CommentList = ({ commentIDs, commentCount }) => {
  return (
    <div>
      <CommentsTitle>{commentCount} Comments</CommentsTitle>
      
      {commentIDs.map(id =>
        <CommentContainer key={id} commentID={id} />)
      }
    </div>
  );
};

export default CommentList;

// TODO: Sorting dropdown (Top/Recent). See the sketch file
// TODO: Need an empty state for when there's no comments. "No one commented yet"
