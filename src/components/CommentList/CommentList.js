import React from 'react';
import CommentsTitle from './CommentTitle';
import CommentContainer from '../../containers/CommentContainer';

const CommentList = ({ commentIDs }) => {
  return (
    <div>
      <CommentsTitle>Comments</CommentsTitle>
      
      {commentIDs.map(id =>
        <CommentContainer key={id} commentID={id} />)
      }
    </div>
  );
};

export default CommentList;

// TODO: Need an empty state for when there's no comments. "No one commented yet"
