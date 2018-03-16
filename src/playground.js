const fs = require('fs');
const fetch = require('node-fetch');

const baseURL = 'https://hacker-news.firebaseio.com/v0/item/';
let computedObject = {};
let computedString = '';
const arr = [16585892, 16585589, 16586811, 16585315, 16586257, 16582136, 16583348, 16585173, 16584966, 16586872, 16587072, 16586250, 16585473, 16585749, 16585729, 16584755, 16584565, 16583934, 16585120, 16585035, 16586495, 16585430, 16582619, 16587204, 16584980, 16586030, 16583822, 16585153, 16584653, 16586387];

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
      fs.appendFile('./mock-simple.js', JSON.stringify(data) + ",", (err) => {
        if(err) throw err;
      });
      i++;
      fetchNow();
    });
}

fetchNow();










//root.innerHTML = computedObject;
