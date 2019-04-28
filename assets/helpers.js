// TEST FOR JEST
function fizzbuzz(n){

  if(n % 5 ==0 && n % 3 ==0) {
    return 'fizzbuzz'
  }
  if(n % 3 ==0) {
    return 'fizz'
  }
  if(n % 5 ==0) {
    return 'buzz'
  }
  return n

}


// Format date for readability
const formatDate = date => {
  const MONTH_NAMES = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  let hour = date.getHours();
  let mins = date.getMinutes();
  
  // Add trailing zero to time
  hour = hour < 10 ? '0' + hour : hour
  mins = mins < 10 ? '0' + mins : mins
  
  return `${day} ${month} ${year} ${hour}:${mins}`
}

// Change text of the dom node
const changeDomText  = (domEl, msg) => {
  domEl.textContent = msg;
}

// Default example items for the first time
const EXAMPLE_ITEMS = [
  {
    name: 'Phantom',
    url: 'https://phantom.land/work',
    date: '14 May 2019 09:30',
    color: 'rgba(20,119,29,0.5)',
  },
  {
    name: 'Google',
    url: 'https://www.google.com/',
    date: '10 May 2019 17:55',
    color: 'rgba(210,93,158,0.5)',
  },
  {
    name: 'Giphy',
    url: 'https://giphy.com/',
    date: '10 May 2019 12:03',
    color: 'rgba(120,19,30,0.5)',
  },
  {
    name: 'Studio Moniker',
    url: 'https://studiomoniker.com/',
    date: '14 May 2019 09:30',
    color: 'rgba(20,19,129,0.5)',
  },
  {
    name: 'MDN',
    url: 'https://developer.mozilla.org/en-US/',
    date: '10 May 2019 17:25',
    color: 'rgba(10,213,58,0.5)',
  },
  {
    name: 'Python Visualiser',
    url: 'http://www.pythontutor.com/visualize.html#mode=edit',
    date: '10 May 2019 12:03',
    color: 'rgba(90,219,30,0.5)',
  },
  {
    name: 'Sung Kwon',
    url: 'http://www.sungkwon.info/',
    date: '10 May 2019 12:03',
    color: 'rgba(255,0,30,0.5)',
  },
  {
    name: 'Heroku',
    url: 'https://www.heroku.com/',
    date: '14 May 2019 09:30',
    color: 'rgba(140,89,229,0.5)',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    date: '10 May 2019 17:55',
    color: 'rgba(10,193,58,0.5)',
  },
  {
    name: 'Huffman Coding',
    url: 'https://en.wikipedia.org/wiki/Huffman_coding',
    date: '10 May 2019 12:03',
    color: 'rgba(9,19,30,0.5)',
  },
  {
    name: 'Nervous System',
    url: 'https://n-e-r-v-o-u-s.com/index.php',
    date: '10 May 2019 09:30',
    color: 'rgba(120,119,129,0.5)',
  },
  {
    name: 'Phaser',
    url: 'https://phaser.io/',
    date: '10 May 2019 17:25',
    color: 'rgba(210,213,58,0.5)',
  },
  {
    name: 'Birthday Problem',
    url: 'https://en.wikipedia.org/wiki/Birthday_problem',
    date: '10 May 2019 12:03',
    color: 'rgba(190,255,230,0.5)',
  },
  {
    name: 'Mike Bostock',
    url: 'https://bost.ocks.org/mike/',
    date: '10 May 2019 12:03',
    color: 'rgba(55,0,230,0.5)',
  },
  {
    name: 'Text Visualiser',
    url: 'https://text-visualiser.firebaseapp.com/',
    date: '10 May 2019 09:30',
    color: 'rgba(120,19,129,0.5)',
  },
  {
    name: 'I am Here to Talk',
    url: 'http://iamheretotalk.online',
    date: '10 May 2019 17:25',
    color: 'rgba(10,213,98,0.5)',
  },
  {
    name: 'Github',
    url: 'https://github.com/',
    date: '10 May 2019 12:03',
    color: 'rgba(190,55,230,0.5)',
  },
  {
    name: 'Is it Christmas?',
    url: 'https://isitchristmas.com',
    date: '10 May 2019 12:03',
    color: 'rgba(55,200,230,0.5)',
  },
  {
    name: 'Yaeji',
    url: 'https://www.youtube.com/watch?v=4t649hEMbIA&t=71s',
    date: '10 May 2019 17:25',
    color: 'rgba(210,113,98,0.5)',
  },
  {
    name: 'Circit Diagram',
    url: 'https://xkcd.com/730/',
    date: '10 May 2019 12:03',
    color: 'rgba(290,55,130,0.5)',
  },
  {
    name: 'Bayes',
    url: 'http://yudkowsky.net/rational/bayes',
    date: '10 May 2019 12:03',
    color: 'rgba(55,100,30,0.5)',
  },
]


