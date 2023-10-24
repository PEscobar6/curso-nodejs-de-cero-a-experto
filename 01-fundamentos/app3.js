const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split('').length;
const reactWord = content.match(/react/ig ?? []).length;

console.log(`Palabras: ${reactWord}`);