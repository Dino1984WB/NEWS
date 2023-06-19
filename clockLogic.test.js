//William Bukowski was here
const axios = require('axios');

function analyzeArticleContent(articleContent) {
  let goodCount = 0;
  let badCount = 0;

  const articleWords = articleContent.toLowerCase().split(' ');

  articleWords.forEach(word => {
    if (goodKeywords.includes(word)) {
      goodCount++;
    } else if (badKeywords.includes(word)) {
      badCount++;
    }
  });

  const ratio = (goodCount - badCount) / (goodCount + badCount);
  const degrees = 90 - (ratio * 180);

  console.log('Good Count:', goodCount);
  console.log('Bad Count:', badCount);
  console.log('Ratio:', ratio);
  console.log('Degrees:', degrees);

  // Call the function to update the rotation of the needle element
  updateNeedleRotation(degrees);
}

function updateNeedleRotation(degrees) {
  const needleElement = document.getElementById('needle');
  needleElement.style.transform = `rotate(${degrees}deg)`;
}

// Fetch data from the server-side Node.js application
axios.get('http://localhost:3000') // Replace with your Node.js server URL
  .then(response => {
    const articleContent = response.data;
    analyzeArticleContent(articleContent);
  })
  .catch(error => {
    console.log('Error fetching article content:', error);
  });
