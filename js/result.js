// Change bg color of body with the new item's color
const setBgColor = () => {
  const bgColor = storage.getRecentItem().color;
  const body = document.querySelector('body');
  body.style.background = bgColor;
};
setBgColor();

// Display item to Dom elements
const showAddedItem = () => {
  const addedItem = storage.getRecentItem();
  const nameDom = document.querySelector('p.name');
  const urlDom = document.querySelector('p.url');
  const dateDom = document.querySelector('p.date');

  changeDomText(nameDom, `Name: ${addedItem.name}`, 'black');
  changeDomText(urlDom, `URL: ${addedItem.url}`, 'black');
  changeDomText(dateDom, `Added Date: ${addedItem.date}`, 'black');
};
showAddedItem();
