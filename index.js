const path = require('path');
const eslintFile = path.join(__dirname,'.eslintrc.js');

const eslintrc = require(eslintFile);

module.exports = eslintrc;

console.log("your cwd", process.cwd())
console.log("your source directory", __dirname)