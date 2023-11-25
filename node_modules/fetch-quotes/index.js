async function getRandomQuote() {
    const apiUrl = 'https://type.fit/api/quotes';
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if(!response.ok){
          console.log('Error in Fetching Response')
          return;
      }
      let random = Math.floor(Math.random() * 17);
      return data[random];
    } catch (error) {
      console.error('Error fetching a random quote:', error.message);
      return null;
    }
  }
  
  module.exports = getRandomQuote;