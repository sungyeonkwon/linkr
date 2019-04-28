const setBgColor = () => {
  const bgColor = storage.getRecentItem().color
  const body = document.querySelector('body')
  body.style.background = bgColor;  
}
setBgColor();


const showAddedItem = () => {
  const addedItem = storage.getRecentItem()
  const nameDom = document.querySelector('p.name')
  const urlDom = document.querySelector('p.url')
  const dateDom = document.querySelector('p.date')
  
  changeDomText(nameDom, `Name: ${addedItem.name}`)
  changeDomText(urlDom, `URL: ${addedItem.url}`)
  changeDomText(dateDom, `Added Date: ${addedItem.date}`)  
}
showAddedItem();

