// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line

let inFile = process.argv[2];
let outFile = process.argv[3];

const sumLines = (filename, callback) => {
  return new Promise((resolve, reject) => {
   fs.readFile(filename, callback, (error, data) => {
     if (error) {
       reject('line not a number');
     }
     resolve(data);
   });
 });
};
  callback(null, sum);
};

let removeTrailingLine = (content) => {
  content.pop();
  return content;
};

let sumTheLines = (line) => {
  sum += line;
  ++line;
  fs.writeFile(outFile, line, { flag: 'a'}, (error) => {
      if (error) {
        console.error(error);
        return;
      }
    });
  });
  console.log('\n Success!');
});

sumLines(inFile)
.then(removeTrailingNewLine)
.then(lines => lines.forEach(sumTheLines))
.catch(console.error)

module.exports = {
  sumLines,
  inFile,
  outFile
};
