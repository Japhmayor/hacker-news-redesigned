import { backticksToText, blockquotify } from './utils.string';

function parseText(text) {
  return blockquotify(backticksToText(text));
}

export default parseText;
