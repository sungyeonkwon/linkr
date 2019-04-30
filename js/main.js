// Enable editing (1) by Click
const editItemClick = e => {
  const isEdit = e.target.classList.contains('edit');
  if (isEdit) {
    editItem(e);
  }
};

// Enable editing (2) by return key press
const editItemReturn = e => {
  if (e.keyCode === 13 && e.target.id === 'linkrname') {
    editItem(e);
  }
};

// Edit item name
const editItem = e => {
  const item = e.target.parentNode.parentNode.parentNode;
  const url = item.children[1].href;
  const editItemBtn = item.children[0].children[0].children[0];
  const input = item.children[0].children[0].children[1];
  if (url !== undefined && !url.includes('undefined')) {
    if (input.disabled) {
      input.disabled = false;
      input.classList.add('active');
      changeDomText(editItemBtn, 'Save', 'black');
    } else {
      input.disabled = true;
      const newName = input.value;
      input.classList.remove('active');
      storage.updateItemName(url, newName);
      changeDomText(editItemBtn, 'Edit', 'black');
    }
  }
};

// Handle removing item
const removeItem = e => {
  if (e.target.classList.contains('remove')) {
    const item = e.target.parentNode.parentNode;
    const url = item.children[1].href;
    const removeBtn = item.children[0].children[1];

    if (e.type === 'mouseover') {
      removeBtn.textContent = 'Remove';
    } else {
      e.type === 'click' ? storage.removeItem(url) : null;
      !isMobile() ? (removeBtn.textContent = '') : null;
    }
  }
};

// URL check (1) Check if the string follows url patterns
const isUrlValid = url => {
  const regex = /^((https?:\/\/))?([\w\d\-]+.)?[\w\d\-]+\.([\w\.]+)+(\/?([\w\d\-\/]*))$/;
  return regex.test(url);
};

// URL check (2) Check if the url already exists in storage
const isUrlDuplicate = url => {
  if (url) {
    const allUrls = storage.getAllItems().map(item => item.url);
    return allUrls.includes(url);
  }
  return false;
};

// URL check (3) Check if the url exists
const doesUrlExist = url => {
  return new Promise((resolve, reject) => {
    const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    const x = new XMLHttpRequest();

    x.open('GET', cors_api_url + url);
    x.onload = () => {
      if (x.status >= 200 && x.status <= 308) {
        // Successful & Redirection responses
        // resolve(x.response)
        // For test purpose
        resolve('success');
      } else {
        // reject(x.statusText)
        // For test purpose
        reject('fail');
      }
    };
    x.onerror = () => reject(x.statusText);
    x.send();
  });
};

// Create domain name string for url
const extractNameFromUrl = url => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match !== null &&
    match.length > 2 &&
    typeof match[2] === 'string' &&
    match[2].length > 0
  ) {
    return match[2];
  } else {
    return 'No Name';
  }
};

// Generate random color for backgrounds
const getRandomColor = () => {
  const f = Math.floor;
  const r = Math.random;
  const LIMIT = 255;
  const OPACITY = 0.5;
  return `rgba(${f(r() * LIMIT)}, ${f(r() * LIMIT)}, ${f(
    r() * LIMIT
  )}, ${OPACITY})`;
};

// Validate form and save new item
const validateForm = e => {
  e.preventDefault();

  const formValiDom = document.querySelector('.form--validation-message');
  const url = document.getElementById('url').value;
  const name = document.getElementById('name').value || extractNameFromUrl(url);

  // Blank message setup
  changeDomText(formValiDom, '');

  if (!isUrlValid(url)) {
    changeDomText(formValiDom, 'Please enter a valid URL.');
  } else if (isUrlDuplicate(url)) {
    changeDomText(formValiDom, 'URL is already in the bookmark.');
  } else {
    changeDomText(
      formValiDom,
      'Please be patient until we check if this url exists...',
      'green'
    );
    doesUrlExist(url)
      .then(response => {
        // Promise returns resolve
        saveItem(name, url);
      })
      .catch(error => {
        // Promise returns reject
        changeDomText(formValiDom, "Sorry, URL doesn't exist.");
      });
  }
};

// Create a new item object and save it to storage and refresh page
const saveItem = (name, url) => {
  const newItem = {
    name,
    url,
    date: formatDate(new Date()),
    color: getRandomColor()
  };

  // Add item to storage
  storage.setItem(newItem);

  // Redirect to result.html
  window.location.href = 'result.html';
};

document.addEventListener('DOMContentLoaded', () => {
  const formLinkr = document.querySelector('#linkr');
  const body = document.querySelector('body');

  // Below is only applicable on index.html
  if (formLinkr) {
    formLinkr.addEventListener('submit', validateForm);
    body.addEventListener('click', editItemClick);
    body.addEventListener('click', removeItem);
    body.addEventListener('mouseover', removeItem);
    body.addEventListener('mouseout', removeItem);
    body.addEventListener('keypress', editItemReturn);
  }
});

// Exports for testing
// module.exports = {
//   isUrlValid,
//   extractNameFromUrl,
//   doesUrlExist
// };
