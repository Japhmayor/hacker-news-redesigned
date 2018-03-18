const fs = require('fs');
const fetch = require('node-fetch');

const baseURL = 'https://hacker-news.firebaseio.com/v0/item/';
let computedObject = {};
let computedString = '';
const arr = [ 16612286, 16607891, 16612624, 16601545, 16611596, 16610357, 16608195, 16591918, 16605583, 16608266, 16604359, 16606705, 16609735, 16602806, 16596652, 16608435, 16608371, 16608236, 16600269, 16597269, 16587289, 16605781, 16596476, 16594763, 16602036, 16584140, 16608844, 16606536, 16600618, 16604007];

let i = 0;

function fetchNow() {
  console.log(i);
  if (i === arr.length) {
    console.log(i);
    return computedObject;
  }
  
  fetch(`${baseURL}${arr[i]}.json`)
    .then(response => response.json())
    .then(data => {
      fs.appendFile('./mock-ask.js', JSON.stringify(data) + ",", (err) => {
        if(err) throw err;
      });
      i++;
      fetchNow();
    });
}

fetchNow();



//root.innerHTML = computedObject;
