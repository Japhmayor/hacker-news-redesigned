import firebase from 'firebase'
import { FEED_ENDPOINTS, ENTRIES_PER_PAGE } from './constants';

firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com/',
});

// firebase.database.enableLogging(function(message) {
//   console.log("[FIREBASE]", message);
// });

export const api = firebase.database().ref('/v0');

/**
 *
 * @param {String} feedName – Name of the feed (top, new, etc.)
 * @param {Number} page     – String representation of the page number grabbed from route: /2, show/3, ...
 * @param {Number} limit    – Number of entried per page
 *
 * @return {Promise<Array>} Array of entries
 *
 * */
export function getFeed(feedName, page = 1, limit = ENTRIES_PER_PAGE) {
  const skip = `${(page - 1) * limit}`; // Firebase expects a string for `startAt`
  
  return new Promise((resolve, reject) => {
    api.child(FEED_ENDPOINTS[feedName])
      .orderByKey()
      .startAt(skip)
      .limitToFirst(limit + 10)
      .on('value', function(snapshot) {
        const allEntryPromises = snapshot.val()
          .map(id => getEntry(id));
        
        Promise.all(allEntryPromises)
          .then(entries => entries
            .filter(entry => entry !== null)
            .slice(0, limit)
          )
          .then(entries => resolve(entries))
          .catch(error => console.error(error));
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
  return fetch(`item/${id}`);
}


function fetch(path) {
  return new Promise((resolve, reject) => {
    api.child(path).on('value', function(snapshot) {
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

