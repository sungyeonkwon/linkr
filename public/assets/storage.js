// Default example items for the first time
const EXAMPLE_ITEMS = [
  {
    name: "Phantom",
    url: "https://phantom.land/work",
    date: "14 May 2019 09:30",
    color: "rgba(20,119,29,0.5)"
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    date: "10 May 2019 17:55",
    color: "rgba(210,93,158,0.5)"
  },
  {
    name: "Hallo Internet",
    url: "http://hallointer.net/",
    date: "10 May 2019 12:03",
    color: "rgba(120,19,30,0.5)"
  },
  {
    name: "Studio Moniker",
    url: "https://studiomoniker.com/",
    date: "14 May 2019 09:30",
    color: "rgba(20,19,129,0.5)"
  },
  {
    name: "MDN",
    url: "https://developer.mozilla.org/en-US/",
    date: "10 May 2019 17:25",
    color: "rgba(10,213,58,0.5)"
  },
  {
    name: "Python Visualiser",
    url: "http://www.pythontutor.com/visualize.html#mode=edit",
    date: "10 May 2019 12:03",
    color: "rgba(90,219,30,0.5)"
  },
  {
    name: "Sung Kwon",
    url: "http://www.sungkwon.info/",
    date: "10 May 2019 12:03",
    color: "rgba(255,0,30,0.5)"
  },
  {
    name: "Heroku",
    url: "https://www.heroku.com/",
    date: "14 May 2019 09:30",
    color: "rgba(140,89,229,0.5)"
  },
  {
    name: "Ghent Art Book Fair",
    url: "https://ghentartbookfair.org/",
    date: "10 May 2019 17:55",
    color: "rgba(10,193,58,0.5)"
  },
  {
    name: "Huffman Coding",
    url: "https://en.wikipedia.org/wiki/Huffman_coding",
    date: "10 May 2019 12:03",
    color: "rgba(9,19,30,0.5)"
  },
  {
    name: "Nervous System",
    url: "https://n-e-r-v-o-u-s.com/index.php",
    date: "10 May 2019 09:30",
    color: "rgba(120,119,129,0.5)"
  },
  {
    name: "Phaser",
    url: "https://phaser.io/",
    date: "10 May 2019 17:25",
    color: "rgba(210,213,58,0.5)"
  },
  {
    name: "Birthday Problem",
    url: "https://en.wikipedia.org/wiki/Birthday_problem",
    date: "10 May 2019 12:03",
    color: "rgba(190,255,230,0.5)"
  },
  {
    name: "Mike Bostock",
    url: "https://bost.ocks.org/mike/",
    date: "10 May 2019 12:03",
    color: "rgba(55,0,230,0.5)"
  },
  {
    name: "Text Visualiser",
    url: "https://text-visualiser.firebaseapp.com/",
    date: "10 May 2019 09:30",
    color: "rgba(120,19,129,0.5)"
  },
  {
    name: "On Particular Days I Search For",
    url:
      "http://bl.ocks.org/sungyeonkwon/raw/98e161cfee9bc1e494340f3235278b16/",
    date: "10 May 2019 17:25",
    color: "rgba(10,213,98,0.5)"
  },
  {
    name: "Github",
    url: "https://github.com/",
    date: "10 May 2019 12:03",
    color: "rgba(190,55,230,0.5)"
  },
  {
    name: "D3",
    url: "https://d3js.org/",
    date: "10 May 2019 12:03",
    color: "rgba(55,200,230,0.5)"
  },
  {
    name: "Yaeji",
    url: "https://www.youtube.com/watch?v=4t649hEMbIA&t=71s",
    date: "10 May 2019 17:25",
    color: "rgba(210,113,98,0.5)"
  },
  {
    name: "Circit Diagram",
    url: "https://xkcd.com/730/",
    date: "10 May 2019 12:03",
    color: "rgba(290,55,130,0.5)"
  },
  {
    name: "Bayes",
    url: "http://yudkowsky.net/rational/bayes",
    date: "10 May 2019 12:03",
    color: "rgba(55,100,30,0.5)"
  }
];

// Function constructor for storage
function Storage() {

  // Only initialise with EXAMPLE_ITEMS for the first time
  this.init = () => {
    if (window.localStorage.links === undefined) {
      window.localStorage.setItem("links", JSON.stringify(EXAMPLE_ITEMS));
    }
  };

  // Clear storage
  this.clear = () => {
    window.localStorage.clear();
  };

  // Get all the current items
  this.getAllItems = () => {
    return JSON.parse(window.localStorage.getItem("links"));
  };

  // Get a single item
  this.getItem = url => {
    const item = this.getAllItems().filter(item => item.url === url);
    return item;
  };

  // Get the recently added item
  this.getRecentItem = () => {
    return JSON.parse(window.localStorage.getItem("links"))[0];
  };

  // Find item by url and update item's name
  this.updateItemName = (url, newName) => {
    const i = this.getAllItems().findIndex(
      item => item.url === url || item.url + "/" === url
    );
    if (i > -1) {
      const item = this.getItem(url)[0];
      const updatedItem = {
        ...item,
        name: newName,
        date: formatDate(new Date())
      };
      const updatedItems = [
        updatedItem,
        ...this.getAllItems().slice(0, i),
        ...this.getAllItems().slice(i + 1)
      ];

      window.localStorage.setItem("links", JSON.stringify(updatedItems));
      location.reload();
    }
  };

  // Remove item
  this.removeItem = url => {
    const newItems = this.getAllItems().filter(
      item => item.url !== url && item.url + "/" !== url
    );

    if (newItems) {
      window.localStorage.setItem("links", JSON.stringify(newItems));
      location.reload();
      return "success";
    } else {
      return false;
    }
  };

  // Add a new item
  this.setItem = newItem => {
    const items = [newItem, ...this.getAllItems()];
    return window.localStorage.setItem("links", JSON.stringify(items));
  };
}

// Initialise storage
const storage = new Storage();
storage.init();

module.exports = {
  storage
};
