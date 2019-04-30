// Check mobile view
const isMobile = () => {
  return window.innerWidth <= 576;
};

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
    'Dec'
  ];
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  let hour = date.getHours();
  let mins = date.getMinutes();

  // Add trailing zero to time
  hour = hour < 10 ? '0' + hour : hour;
  mins = mins < 10 ? '0' + mins : mins;

  return `${day} ${month} ${year} ${hour}:${mins}`;
};

// Change text of the dom node
const changeDomText = (domEl, msg, color = 'red') => {
  domEl.style.color = color;
  domEl.textContent = msg;
};
