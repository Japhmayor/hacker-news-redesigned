// PUBLIC_URL environment variable is available through webpack DefinePlugin
/* eslint-disable no-undef */
export const BASE_URL = typeof process.env.PUBLIC_URL !== 'undefined' ? process.env.PUBLIC_URL : '';
/* eslint-enable no-undef */

export const ENTRIES_PER_PAGE = 30;

export const COMMENT_DEPTH = 6;


