import 'babel-polyfill';
import async from 'async';
import fs from 'fs';

function stats (file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, data) => {
      if (err) {
        return reject (err);
      }
      resolve(data);
    });
  });
}

Promise.all([
  stats('.babelrc'),
  stats('.gitignore'),
  stats('package.json'),
])
.then((data) => console.log(data))
.catch((err) => console.log(err))
