var localStorageMock = function(){
  let store = {};

  return {
    clear: function() {
      store = {};
    },
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    }
  }
};


Object.defineProperty(window, 'localStorage', { value: localStorageMock() });

global.__PATH_PREFIX__ =  '';
