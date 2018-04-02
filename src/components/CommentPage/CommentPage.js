import React from 'react';

const CommentPage = ({ id, title, text, score, by: author, time, kids: commentIDs }) => {
  return (
    <div>
      I'm a comment page!
    </div>
  );
};

export default CommentPage;

// TODO: Compare (hostnames only or agains empty string for referrer) and conditionally show Back button
//     console.log(document.referrer);
//     console.log(window.location.href);
