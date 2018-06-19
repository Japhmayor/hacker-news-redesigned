// Horrible way to recursively select given number of comments from a nested structure, in order of occurence.

function deepSlice(list, limit) {
  let count = 0;

  function clone(list) {
    const output = [];

    for (const comment of list) {
      if (count === limit) {
        break;
      }

      count++;

      if (!comment.comments) {
        output.push(comment);
      }

      else {
        output.push({
          ...comment,
          comments: clone(comment.comments),
        });
      }
    }

    return output;
  }

  return clone(list);
}

export default deepSlice;
