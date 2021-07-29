const request = require('request');
const fs = require('fs')

const url = process.argv[2];
const path = process.argv[3];

console.log(url);

request(url, (error, response, body) => {
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err)
      return
    }

    fs.stat(path, (err, stats) => {
      if (err){
        console.error(err);
        return;
      }

      console.log(`Downloaded and saved ${stats.size} to ${path}`);
    });
  });
}); 