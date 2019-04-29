// CORS
(function() {
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function() {
      var args = slice.call(arguments);
      var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
          targetOrigin[1] !== cors_api_host) {
          args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
  };
})();


// Format date for readability
const formatDate = date => {
  const MONTH_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  let hour = date.getHours();
  let mins = date.getMinutes();

  // Add trailing zero to time
  hour = hour < 10 ? "0" + hour : hour;
  mins = mins < 10 ? "0" + mins : mins;

  return `${day} ${month} ${year} ${hour}:${mins}`;
};

// Change text of the dom node
const changeDomText = (domEl, msg) => {
  domEl.textContent = msg;
};



// // Exports for testing
// module.exports = {
//   formatDate,
//   changeDomText
// };
