const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebpage() {
  try {
    const response = await axios.get('https://news.google.com/search?q=USA%2C%20US%20%22China%22&hl=en-US&gl=US&ceid=US%3Aen'); // Replace with the URL you want to scrape
    const htmlContent = response.data;

    const $ = cheerio.load(htmlContent);

    // Extract the desired data using jQuery-like selectors
    const headlines = [];
    $('.news-article .headline').each((index, element) => {
      const headline = $(element).text();
      headlines.push(headline);
    });

    // Process the extracted data
    headlines.forEach(headline => {
      console.log(headline);
    });
  } catch (error) {
    console.log('Error scraping web page:', error);
  }
}

scrapeWebpage();
