const fs = require('fs');

function createTextFileReadStream(filePath) {
  return fs.createReadStream(filePath, { encoding: 'utf-8' }); 
}
let result = [];

// Example Usage
const myTextFileStream = createTextFileReadStream('sample.txt');

myTextFileStream.on('data', (chunk) => {
  console.log('Received a chunk of text:', chunk);
  result.push(chunk);
});

myTextFileStream.on('end', () => {
  console.log('End of file reached');
});

myTextFileStream.on('error', (error) => {
  console.error('An error occurred:', error);
});
