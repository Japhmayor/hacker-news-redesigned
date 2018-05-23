// PUBLIC_URL is created by webpack DefinePlugin from an environment variable
// with the same name, production only. We're simply remapping it to avoid
// dreadful editor inspection warnings and make sure it's '/' in development mode.

/* eslint-disable no-undef */
export const BASE_URL = typeof PUBLIC_URL !== 'undefined' ? PUBLIC_URL : '/';
/* eslint-enable no-undef */

export const FEED_ENDPOINTS = {
  top:  'topstories',
  new:  'newstories',
  show: 'showstories',
  ask:  'askstories',
  jobs: 'jobstories',
  best: 'beststories',
};

export const ENTRIES_PER_PAGE = 30;

export const COMMENT_DEPTH = 6;
