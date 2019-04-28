"use strict";

/*
DOM VARIABLES
*/
const formLinkr = document.querySelector('#linkr')
const body = document.querySelector('body')
const removeBtn = document.querySelector('.remove')

/*
HELPER FUNCTIONS
*/
const changeDomText  = (domEl, msg) => {
  domEl.textContent = msg;
}

// TODO
const doesUrlExist = url => {
  const xhr = new XMLHttpRequest();
  return true
}

// Handle editing item
const editItem = e => {

  const isEdit = e.target.classList.contains('edit')

  if (isEdit){
    const item = e.target.parentNode.parentNode.parentNode
    const url = item.children[1].href;
    const itemBarTitle = e.target.parentNode;
    const editItemBtn = itemBarTitle.children[0]
    const input = itemBarTitle.children[1]

    if (input.disabled){
      input.disabled = false;
      input.classList.add('active');
      changeDomText(editItemBtn, 'Save')
    } else {
      input.disabled = true;
      const newName = input.value;
      input.classList.remove('active');
      storage.updateItemName(url, newName)
      changeDomText(editItemBtn, 'Edit')
    }
  }
}

// Handle removing item
const removeItem = e => {
  if (e.target.classList.contains('remove')) {
    const item = e.target.parentNode.parentNode
    const url = item.children[1].href;
    const removeBtn = item.children[0].children[1] 

    if (e.type === 'mouseover'){
      removeBtn.textContent = 'Remove'
    } else if (e.type === 'mouseout'){
      removeBtn.textContent = ''
    } else if (e.type === 'click') {
      storage.removeItem(url)
    }

  }
}

// Check if the url already exists in storage
const isUrlDuplicate = url => {
  const allUrls = storage.getAllItems().map(item => item.url)
  return allUrls.includes(url)
}

// Create domain name string for url
const extractNameFromUrl = url => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
  return match[2];
  } else {
    return 'No Name';
  }
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

// Generate random color for backgrounds
const getRandomColor = () => {
  const f = Math.floor;
  const r = Math.random;
  const LIMIT = 255;
  const OPACITY = 0.5;
  return `rgba(${f(r()*LIMIT)}, ${f(r()*LIMIT)}, ${f(r()*LIMIT)}, ${OPACITY})`
}

const validateForm = e => {
  e.preventDefault();
  
  const elms = e.target.elements;
  const isValid = e.target.checkValidity();
  const formValiDom = document.querySelector('.form--validation-message')
  const url = document.getElementById('url').value
  const name = document.getElementById('name').value || extractNameFromUrl(url)

  // if any of the form input is invalid 
  if (!isValid) { 
    for (let i = 0; i < elms.length; i++){
      const el = elms[i]
      const type = el.type

      // if the url is invalid
      if (!el.validity.valid && type === 'url') {
        changeDomText(formValiDom, 'Please enter a valid URL.')
      } else {
        changeDomText(formValiDom, 'Something went wrong. Please try again.')
      }
    }
  } else if (!doesUrlExist(url)) {
    changeDomText(formValiDom, 'URL doesn\'t exist.')
  } else if (isUrlDuplicate(url)) {
    changeDomText(formValiDom, 'URL is already in the bookmark')
  } else {

    const newItem = { 
      name, 
      url, 
      date: formatDate(new Date()),
      color: getRandomColor(),
    }

    // Add item to storage
    storage.setItem(newItem)

    // Redirect to result.html
    window.location.href = 'result.html';
  }
}

/*
MAIN
*/

document.addEventListener('DOMContentLoaded', () => {

  // Checking if this is index.html
  if (formLinkr) { 
    formLinkr.addEventListener('submit', validateForm);
    body.addEventListener('click', editItem)
    removeBtn.addEventListener('mouseover', removeItem)
    removeBtn.addEventListener('mouseout', removeItem)
    removeBtn.addEventListener('click', removeItem)
  }

});





