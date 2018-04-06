import React from 'react';
import CommentsTitle from './CommentTitle';
import Comment from '../Comment/Comment';

const CommentList = ({ comments, commentCount }) => {
  console.log(comments);
  
  return (
    <div>
      <CommentsTitle>{commentCount} Comments</CommentsTitle>
      
      {comments.map(comment =>
        <Comment key={comment.id} {...comment} />)
      }
    </div>
  );
};

export default CommentList;

// TODO: Sorting dropdown (Top/Recent). See the sketch file
// TODO: Need an empty state for when there's no comments. "No one commented yet"
