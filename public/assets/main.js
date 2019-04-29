// Enable editing (1) by Click
const editItemClick = e => {
  const isEdit = e.target.classList.contains("edit");
  if (isEdit) {
    editItem(e);
  }
};

// Enable editing (2) by return key press
const editItemReturn = e => {
  if (e.keyCode === 13 && e.target.id === "linkrname") {
    console.log("editing enter");
    editItem(e);
  }
};

// Edit item name
const editItem = e => {
  const item = e.target.parentNode.parentNode.parentNode;
  const url = item.children[1].href;
  const editItemBtn = item.children[0].children[0].children[0];
  const input = item.children[0].children[0].children[1];

  if (input.disabled) {
    input.disabled = false;
    input.classList.add("active");
    changeDomText(editItemBtn, "Save");
  } else {
    input.disabled = true;
    const newName = input.value;
    input.classList.remove("active");
    storage.updateItemName(url, newName);
    changeDomText(editItemBtn, "Edit");
  }
};

// Handle removing item
const removeItem = e => {
  if (e.target.classList.contains("remove")) {
    const item = e.target.parentNode.parentNode;
    const url = item.children[1].href;
    const removeBtn = item.children[0].children[1];

    if (e.type === "mouseover") {
      removeBtn.textContent = "Remove";
    } else if (e.type === "mouseout") {
      removeBtn.textContent = "";
    } else if (e.type === "click") {
      removeBtn.textContent = "";
      storage.removeItem(url);
    } else {
      removeBtn.textContent = "";
    }
  }
};

// URL check (1) Check if the string follows url patterns
const isUrlValid = url => {
  const regex = /^((https?:\/\/))?([\w\d\-]+.)?[\w\d\-]+\.([\w\.]+)+(\/?([\w\d\-\/]*))$/;
  return regex.test(url);
};

// URL check (2) Check if the url exists
const doesUrlExist = url => {
  // TODO
  return true;
};

// URL check (3) Check if the url already exists in storage
const isUrlDuplicate = url => {
  if (url) {
    const allUrls = storage.getAllItems().map(item => item.url);
    return allUrls.includes(url);
  }
  return false
};

// Create domain name string for url
const extractNameFromUrl = url => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match !== null &&
    match.length > 2 &&
    typeof match[2] === "string" &&
    match[2].length > 0
  ) {
    return match[2];
  } else {
    return "No Name";
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

  const formValiDom = document.querySelector(".form--validation-message");
  const url = document.getElementById("url").value;
  const name = document.getElementById("name").value || extractNameFromUrl(url);

  if (!isUrlValid(url)) {
    changeDomText(formValiDom, "Please enter a valid URL.");
  } else if (!doesUrlExist(url)) {
    changeDomText(formValiDom, "URL doesn't exist.");
  } else if (isUrlDuplicate(url)) {
    changeDomText(formValiDom, "URL is already in the bookmark");
  } else {
    saveItem(name, url);
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
  window.location.href = "result.html";
};

document.addEventListener("DOMContentLoaded", () => {
  const formLinkr = document.querySelector("#linkr");
  const body = document.querySelector("body");

  // Below is only applicable on index.html
  if (formLinkr) {
    formLinkr.addEventListener("submit", validateForm);
    body.addEventListener("click", editItemClick);
    body.addEventListener("click", removeItem);
    body.addEventListener("mouseover", removeItem);
    body.addEventListener("mouseout", removeItem);
    body.addEventListener("keypress", editItemReturn);
  }
});

// // Exports for testing
// module.exports = {
//   isUrlValid,
//   extractNameFromUrl,
//   doesUrlExist
// };
