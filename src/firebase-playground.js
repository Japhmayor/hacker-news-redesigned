import firebase from 'firebase'

firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com/',
});

const database = firebase.database();

const something = database.ref('v0/newstories/');

something.once('value', function(snapshot) {
  retrieveNewThirty(snapshot.val());
});

function retrieveNewThirty(IDlist) {
  console.log(IDlist);
}
