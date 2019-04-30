// Function constructor for pagination
function Pagination() {
  // Get all items from storage
  const allItems = storage.getAllItems();

  const prevButton = document.getElementById('button--prev');
  const nextButton = document.getElementById('button--next');
  const itemWrapper = document.getElementById('item-wrapper');

  let current_page = 1;
  let records_per_page = 20;

  this.init = () => {
    changePage(1);
    pageNumbers();
    selectedPage();
    clickPage();
    addEventListeners();
  };

  const addEventListeners = () => {
    prevButton.addEventListener('click', prevPage);
    nextButton.addEventListener('click', nextPage);
  };

  // Adjust opacity of the page number button according to current selected page
  const selectedPage = () => {
    let page_number = document.querySelectorAll('.page-number');
    for (let i = 0; i < page_number.length; i++) {
      if (i == current_page - 1) {
        page_number[i].classList.remove('opacity');
      } else {
        page_number[i].classList.add('opacity');
      }
    }
  };

  // Adjust opacity of the prev and next button
  const checkButtonOpacity = () => {
    current_page == 1
      ? prevButton.classList.add('opacity')
      : prevButton.classList.remove('opacity');
    current_page == numPages()
      ? nextButton.classList.add('opacity')
      : nextButton.classList.remove('opacity');
  };

  // Create items according to page number
  const changePage = page => {
    // If there is no item, show message
    if (allItems.length < 1) {
      itemWrapper.innerHTML =
        '<p class="center">No bookmarks to show. Please add some!</p>';
      return false;
    }

    if (page > numPages() - 1) {
      page = numPages();
    }

    itemWrapper.innerHTML = '';

    for (
      let i = (page - 1) * records_per_page;
      i < page * records_per_page && i < allItems.length;
      i++
    ) {
      const item = `
          <div class="item">
          <div class="item__bar">
            <h1 class="item__bar--title">
              <span class="edit">Edit</span>
              <input type="text" name="name" id="linkrname" placeholder="${
                allItems[i].name
              }" maxlength="20" size="20" disabled>       
            </h1>
            <span class="remove"><span class="remove-text">Remove</span></span>
          </div>
          <a href="${allItems[i].url}" target="_blank">
            <div class="item__content" style='background-color:${
              allItems[i].color
            }'>
              <h4 class="item__content--url">${allItems[i].url}</h4>
              <h5 class="item__content--date">Last updated: ${
                allItems[i].date
              }</h5>
            </div>
          </a>
        </div>`;

      itemWrapper.innerHTML += item;
    }
    checkButtonOpacity();
    selectedPage();
  };

  const prevPage = () => {
    if (current_page > 1) {
      current_page--;
      changePage(current_page);
    }
  };

  const nextPage = () => {
    if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
    }
  };

  // Change current page according to click event
  const clickPage = () => {
    document.addEventListener('click', e => {
      if (
        e.target.nodeName == 'BUTTON' &&
        e.target.classList.contains('page-number')
      ) {
        current_page = e.target.textContent;
        changePage(current_page);
      }
    });
  };

  // Append page number buttons
  const pageNumbers = () => {
    let pageNumber = document.getElementById('pages');
    pageNumber.innerHTML = '';

    for (let i = 1; i < numPages() + 1; i++) {
      pageNumber.innerHTML += `<button class='page-number'>${i}</button>`;
    }
  };

  // Get number of pages needed given records_per_page
  const numPages = () => {
    return Math.ceil(allItems.length / records_per_page);
  };
}

// Initialise pagination and display items
const pagination = new Pagination();
pagination.init();
