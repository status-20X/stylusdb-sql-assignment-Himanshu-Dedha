const fs = require('fs');
const textToRepeat = "This is a line of text to be repeated. ";
const repetitions = 100000; // Adjust for desired file size

const largeText = textToRepeat.repeat(repetitions);

fs.writeFileSync('sample.txt', largeText);