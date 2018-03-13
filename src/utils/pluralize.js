function pluralize(text, count) {
  return count !== 1 ? `${text}s` : text;
}

export default pluralize;
