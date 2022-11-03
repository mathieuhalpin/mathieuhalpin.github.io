const quoteButton = document.querySelector('.new-quote');
const end = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

quoteButton.addEventListener('click', getQuote);
window.addEventListener('reload', getQuote);

async function getQuote() {
    console.log('getQuote works');
    let text = await fetch(end);
    let respond = await text.text();
    let json_response = JSON.parse(respond);
    console.log(json_response);
    console.log(json_response['message']);

    displayQuote(json_response['message']);
}

function displayQuote() {

    a = document.getElementById('js-quote-text').textContent;
}
