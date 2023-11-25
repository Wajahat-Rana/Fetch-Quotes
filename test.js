const getRandomQuote = require('fetch-quotes');

getRandomQuote().then((quote) => {
    console.log('Quote : '+ quote.text);
    console.log('Author : '+ quote.author);

  }).catch((error) => {
    console.error('Error:', error.message);
  });
