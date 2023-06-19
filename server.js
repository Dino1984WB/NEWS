const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://news.google.com/search?q=USA%2C%20US%20%22China%22&hl=en-US&gl=US&ceid=US%3Aen');
    const htmlContent = response.data;

    const $ = cheerio.load(htmlContent);

    // Extract the desired data using jQuery-like selectors
    const headlines = [];
    $('h3 a').each((index, element) => {
      const headline = $(element).text();
      headlines.push(headline);
    });

    // Combine headlines into a single string
    const articleContent = headlines.join(' ');

    // Send the article content as the response
    res.send(articleContent);
  } catch (error) {
    console.log('Error scraping web page:', error);
    res.status(500).send('Error scraping web page');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
