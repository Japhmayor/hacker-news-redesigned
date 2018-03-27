/**
 * Wrap occurences starting with "&gt;" (>) into a <blockquote>
 * It expects non-enclosed <p> and <pre> tags within the text, as that's how HN Api delivers comment texts.
 *
 * @param {String} text - `text` value from HNApi
 *
 * */

export function blockquotify(text) {
  const pattern = /(<p>)?(&gt;\s?)(.*?)((<p>)|(<pre>))/gi;
  return text.replace(pattern, '<blockquote>$3</blockquote>$4');
}


// TODO: Move this functionality to the server when implementing GraphQL; might be too costly.
