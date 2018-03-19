import React from 'react';
import CommentsTitle from './CommentTitle';
import Comment from '../Comment/Comment';
import { getTimePassed } from '../../utils/utils.time';

// This should receive an array of comment objects, and recursively render them with kids
const CommentList = ({comments}) => {
  console.log(comments);
  
  return (
    <div>
      <CommentsTitle>Comments</CommentsTitle>
      
      {comments.map(comment =>
        <Comment key={comment.id} {...comment}/>)
      }
    </div>
  );
};

export default CommentList;
