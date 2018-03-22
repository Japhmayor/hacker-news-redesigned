import firebase from 'firebase'
import { FEED_ENDPOINTS, ENTRIES_PER_PAGE } from './constants';

firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com/',
});

const api = firebase.database().ref('/v0');

/**
 *
 * @param {String} feedName – Name of the feed (top, new, etc.)
 * @param {Number} page     – Current page of the feed, grabbed from route: 1, 2, ...
 * @param {Number} limit    – Number of entried per page
 *
 * @return {Promise<Array>} Array of entries
 *
 * */
export function getFeed(feedName, page = 1, limit = ENTRIES_PER_PAGE) {
  const skip = (page - 1) * limit;
  
  return api.child(FEED_ENDPOINTS[feedName])
    .once('value')
    .then(snapshot => snapshot.val())
    .then(IDList => IDList.slice(skip, skip + limit))
    .then(IDList => IDList.map(id => getEntry(id)))
    .then(entryPromises => Promise.all(entryPromises))
    .catch(error => `Failed to load the feed: ${error}`);
}

/**
 *
 * @param {String} id – ID of the entry
 * @return {Promise<Object>} – Single entry
 *
 * */
export function getEntry(id) {
  return api.child(`item/${id}`)
    .once('value')
    .then(snapshot => snapshot.val());
}


