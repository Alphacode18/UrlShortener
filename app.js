const unirest = require('unirest');
const promptSync = require('prompt-sync')();

const userInput = promptSync("Enter The Url You Want Shortened:  ");

const url = 'https://api.shrtco.de/v2/shorten?url=' + userInput;

const request = unirest('GET', url);

request.headers({
	"accept": "application/json",
});

request.end((response) => {
    if (!response) {
        console.log('Something Went Wrong');
    }
    console.log('\n');
    console.log(`Shortened Url: ${response.body.result.full_short_link}`);
})

