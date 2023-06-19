var goodKeywords = [
    'positive', 'cooperation', 'peaceful', 'diplomacy', 'partnership',
    'mutual', 'harmony', 'friendly', 'progress', 'collaboration',
    'constructive', 'stable', 'amicable', 'alliance', 'advancement',
    'prosperity', 'trust', 'supportive', 'bridge', 'unity',
    'integration', 'successful', 'conciliation', 'beneficial', 'consensus',
    'balanced', 'coexist', 'synergy', 'partners', 'mutually',
    'interconnected', 'promising', 'triumph', 'alleviate', 'assist',
    'comfortable', 'common', 'coordinated', 'delightful', 'enduring',
    'felicity', 'flourishing', 'friendly', 'generous', 'glad',
    'happy', 'hilarious', 'ideal', 'jovial', 'merry',
    'nice', 'optimistic', 'pleasant', 'pleasurable', 'rewarding',
    'satisfying', 'serene', 'sunny', 'thriving', 'upbeat',
    'vibrant', 'wholesome', 'advantageous', 'benevolent', 'commendable',
    'constructive', 'effective', 'fruitful', 'gratifying', 'helpful',
    'inspiring', 'rewarding', 'soothing', 'supportive', 'valuable',
    'wonderful', 'affirmative', 'assuring', 'bright', 'commendable',
    'encouraging', 'excellent', 'hopeful', 'nurturing', 'positive',
    'productive', 'reassuring', 'successful', 'uplifting', 'wise'
  ];
  
var badKeywords = [
    'conflict', 'tensions', 'dispute', 'escalation', 'hostility',
    'confrontation', 'standoff', 'clash', 'friction', 'crisis',
    'aggression', 'rivalry', 'discord', 'animosity', 'division',
    'strife', 'contention', 'instability', 'opposition', 'provocation',
    'violence', 'insecurity', 'distrust', 'imbalance', 'threat',
    'challenge', 'resistance', 'frustration', 'clamor', 'disagreement',
    'discordance', 'enmity', 'harmful', 'hostile', 'obstruction',
    'quarrel', 'turmoil', 'unrest', 'vulnerability', 'antagonism',
    'anxiety', 'bitterness', 'clamor', 'collision', 'contradiction',
    'damage', 'discord', 'disharmony', 'disorder', 'disruption',
    'dissension', 'division', 'fight', 'imbalance', 'incompatibility',
    'inconsistency', 'insecurity', 'intrigue', 'jealousy', 'obstacle',
    'offense', 'pain', 'rage', 'rupture', 'sour',
    'strain', 'stress', 'struggle', 'suffering', 'tumult',
    'turmoil', 'unpleasant', 'upheaval', 'violation', 'war',
    'wrestle', 'wound', 'wrangle', 'wreak', 'wrong'
  ];
  
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
  
    const needleElement = document.getElementById('needle');
    needleElement.style.transform = `rotate(${degrees}deg)`;
  }
  
  // Fetch data from server-side Node.js application
  fetch('http://localhost:3000') // Replace with your Node.js server URL
    .then(response => response.text())
    .then(articleContent => {
      analyzeArticleContent(articleContent);
    })
    .catch(error => {
      console.log('Error fetching article content:', error);
    });
  