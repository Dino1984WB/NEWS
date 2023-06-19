//William Bukowski was here
const { analyzeArticleContent } = require('./clockLogic');

describe('Clock Logic', () => {
  it('should rotate needle to 0 degrees when all words are bad keywords', () => {
    const articleContent = 'This is a bad article containing negative words.';
    const startTime = new Date();
    analyzeArticleContent(articleContent);
    const endTime = new Date();
    const needleElement = document.getElementById('needle');
    console.log(`${startTime.toISOString()} - ${endTime.toISOString()}: Article Content: ${articleContent}`);
    console.log(`${endTime.toISOString()}: Rotation: ${needleElement.style.transform}`);
    expect(needleElement.style.transform).toBe('rotate(0deg)');
  });

  it('should rotate needle to 180 degrees when all words are good keywords', () => {
    const articleContent = 'This is a great article containing positive words.';
    const startTime = new Date();
    analyzeArticleContent(articleContent);
    const endTime = new Date();
    const needleElement = document.getElementById('needle');
    console.log(`${startTime.toISOString()} - ${endTime.toISOString()}: Article Content: ${articleContent}`);
    console.log(`${endTime.toISOString()}: Rotation: ${needleElement.style.transform}`);
    expect(needleElement.style.transform).toBe('rotate(180deg)');
  });

  it('should calculate the rotation correctly for a mixture of good and bad keywords', () => {
    const articleContent = 'This is a mixed article with both good and bad words.';
    const startTime = new Date();
    analyzeArticleContent(articleContent);
    const endTime = new Date();
    const needleElement = document.getElementById('needle');
    console.log(`${startTime.toISOString()} - ${endTime.toISOString()}: Article Content: ${articleContent}`);
    console.log(`${endTime.toISOString()}: Rotation: ${needleElement.style.transform}`);
    expect(needleElement.style.transform).toBe('rotate(90deg)');
  });
});
