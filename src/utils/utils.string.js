/**
 * Wrap occurences starting with "&gt;" (>) into a <blockquote>
 * It expects non-enclosed <p> and <pre> tags within the text, as that's how HN Api delivers comment texts.
 *
 * @param {String} text – HTML string from API
 * @return {String} text with added <blockquote> tags
 * */

export function blockquotify(text) {
  const pattern = /(<p>)?(&gt;\s?)(.*?)((<p>)|(<pre>))/gi;
  return text.replace(pattern, '<blockquote>$3</blockquote>$4');
}

/**
 * Replace occurences wrapped with `backticks` into a <code>
 * It expects non-enclosed <p> and <pre> tags within the text, as that's how HN Api delivers comment texts.
 *
 * @param {String} text – HTML string from API
 * @return {String} text wrapped in <code> tag
 * */
export function backticksToText(text) {
  const pattern = /(`)(\S+?)(`)/g;
  return text.replace(pattern, '<code>$2</code>');
}

/**
 * Capitalize text
 *
 * @param {String} text – Text to capitalize
 * @param {Boolean} lowerRest – Turn the rest of the text to lowercase
 * @return {String} Capitalized text
 * */
export const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
