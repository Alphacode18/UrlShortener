const unirest = require('unirest');
const promptSync = require('prompt-sync')();

const userInput = promptSync("Enter The Url You Want Shortened:  ");

const url = 'https://api.shrtco.de/v2/shorten?url=' + userInput;

console.log(url);