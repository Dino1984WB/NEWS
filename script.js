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
  
  function fetchAndAnalyzeArticles() {
    // Use your preferred method to scrape Google News articles related to Chinese-US relations
  
    // Mock data for demonstration purposes
    var articles = [
      'This is a positive article about cooperation between China and the US.',
      'Tensions rise as China and the US engage in a trade dispute.',
      'Efforts for peace and stability between China and the US continue.',
    ];
  
    var goodCount = 0;
    var badCount = 0;
  
    articles.forEach(article => {
      var lowercaseArticle = article.toLowerCase();
      goodKeywords.forEach(goodWord => {
        if (lowercaseArticle.includes(goodWord)) {
          goodCount++;
        }
      });
      badKeywords.forEach(badWord => {
        if (lowercaseArticle.includes(badWord)) {
          badCount++;
        }
      });
    });
  
    var ratio = goodCount / badCount;
    var degrees = (180 * ratio) - 90; // Adjust the scaling of the ratio to match the desired angle
  
    var needleElement = document.getElementById('needle');
    needleElement.style.transform = `rotate(${degrees}deg)`;
  }
  
  // Fetch and analyze articles every 3 seconds (adjust the interval as needed)
  setInterval(fetchAndAnalyzeArticles, 3000); // Fetch and analyze every 3 seconds
  