function StorageConstructor () {

  // Only initialise for the first time
  this.init = () => {
    if (window.localStorage.links === undefined) {
      window.localStorage.setItem("links", JSON.stringify(EXAMPLE_ITEMS))
    }
  }

  // Clear storage
  this.clear = () => {
    window.localStorage.clear()
  }

  // Get all the current items
  this.getAllItems = () => {
    return JSON.parse(window.localStorage.getItem("links"))
  }

  // Get a single item
  this.getItem = url => {
    const item = this.getAllItems().filter(item => item.url === url)
    return item
  }

  // Get the recently added item
  this.getRecentItem = () => {
    return JSON.parse(window.localStorage.getItem("links"))[0]
  }

  // Find item by url and update item's name
  this.updateItemName = (url, newName) => {

    const i = this.getAllItems().findIndex(item => item.url === url)
    if (i > -1){
      const item = this.getItem(url)[0]
      const updatedItem = { ...item, name: newName, date: formatDate(new Date()) }
      const updatedItems = [
        updatedItem,
        ...this.getAllItems().slice(0, i),
        ...this.getAllItems().slice(i + 1),
      ]
  
      window.localStorage.setItem("links", JSON.stringify(updatedItems))
      location.reload();
    }
  }

  // Remove item 
  this.removeItem = url => {
    const i = this.getAllItems().findIndex(item => item.url === url)
    if (i > -1){
      const updatedItems = [
        ...this.getAllItems().slice(0, i),
        ...this.getAllItems().slice(i + 1),
      ]
      window.localStorage.setItem("links", JSON.stringify(updatedItems))
      location.reload();
    }
  }

  // Add a new item 
  this.setItem = newItem => {
    const items = [newItem, ...this.getAllItems()]
    return window.localStorage.setItem("links", JSON.stringify(items))
  }

}
const storage = new StorageConstructor();
storage.init()
