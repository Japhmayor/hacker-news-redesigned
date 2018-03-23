import firebase from 'firebase'
import { FEED_ENDPOINTS, ENTRIES_PER_PAGE } from './constants';

firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com/',
});

export const api = firebase.database().ref('/v0');

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

  return new Promise((resolve, reject) => {
    api.child(FEED_ENDPOINTS[feedName])
      .on('value', function(snapshot) {
        const allRequests = snapshot.val()
          .slice(skip, skip + ENTRIES_PER_PAGE)
          .map(id => getEntry(id));
      
        resolve(Promise.all(allRequests))
      }, reject);
  });
}

/**
 *
 * @param {String} id – ID of the entry
 * @return {Promise<Object>} – Single entry
 *
 * */
export function getEntry(id) {
  return new Promise((resolve, reject) => {
    api.child(`item/${id}`)
      .on('value', snapshot => {
        resolve(snapshot.val())
      }, reject);
  });
}

// Listen to all feeds

// Object.keys(FEED_ENDPOINTS).forEach(endpoint => {
//   api.child(FEED_ENDPOINTS[endpoint]).on('value', function(snapshot) {
//     console.log(endpoint, snapshot.val());
//   });
// });
//

