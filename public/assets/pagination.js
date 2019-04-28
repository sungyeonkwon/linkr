function Pagination() {
    
  const allItems = storage.getAllItems()

  const prevButton = document.getElementById('button_prev');
  const nextButton = document.getElementById('button_next');
  const itemWrapper = document.getElementById('item-wrapper');

  let current_page = 1;
  let records_per_page = 20;
  
  this.init = function() {
    changePage(1);
    pageNumbers();
    selectedPage();
    clickPage();
    addEventListeners();
  }
  
  const addEventListeners = function() {
    prevButton.addEventListener('click', prevPage);
    nextButton.addEventListener('click', nextPage);   
  }
        
  const selectedPage = function() {
    let page_number = document.getElementById('page_number').getElementsByClassName('page-number'); 
    for (let i = 0; i < page_number.length; i++) {
      if (i == current_page - 1) {
          page_number[i].style.opacity = "1.0";
      } else {
          page_number[i].style.opacity = "0.5";
      }
    }   
  }  
  
  const checkButtonOpacity = function() {
    current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
    current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
  }

  const changePage = page => {

    if (allItems.length < 1) {
      itemWrapper.innerHTML = '<p class="center">No bookmarks to show. Please add some!</p>'
      return false
    }

    if (page > (numPages() -1)) {
        page = numPages();
    }
  
    itemWrapper.innerHTML = "";

    for (let i = (page -1) * records_per_page; i < (page * records_per_page) && i < allItems.length; i++) {
        const item = `
          <div class="item">
          <div class="item__bar">
            <h1 class="item__bar--title">
              <span class="edit">Edit</span>
              <input type="text" name="name" id="linkrname" placeholder="${allItems[i].name}" maxlength="20" size="20" disabled>       
            </h1>
            <span class="remove"><span class="remove-text"></span></span>
          </div>
          <a href="${allItems[i].url}" target="_blank">
            <div class="item__content" style='background-color:${allItems[i].color}'>
              <h4 class="item__content--url">${allItems[i].url}</h4>
              <h5 class="item__content--date">Last updated: ${allItems[i].date}</h5>
            </div>
          </a>
        </div>`

      itemWrapper.innerHTML += item
    }
    checkButtonOpacity();
    selectedPage();
  }

  const prevPage = () => {
    if(current_page > 1) {
        current_page--;
        changePage(current_page);
    }
  }

  const nextPage = () => {
    if(current_page < numPages()) {
        current_page++;
        changePage(current_page);
    } 
  }

  const clickPage = () => {
    document.addEventListener('click', function(e) {
      if(e.target.nodeName == "BUTTON" && e.target.classList.contains("page-number")) {
        current_page = e.target.textContent;
        changePage(current_page);
      }
    });
  }

  const pageNumbers = () => {
    let pageNumber = document.getElementById('page_number');
        pageNumber.innerHTML = "";

    for(let i = 1; i < numPages() + 1; i++) {
        pageNumber.innerHTML += "<button class='page-number'>" + i + "</button>";
    }
  }

  const numPages = () => {
    return Math.ceil(allItems.length / records_per_page);  
  }
}

