var storage = require("./storage");

describe("format date", () => {
  it("remove item", () => {
    console.log(__SETUP_FILES_TEST__);    
    expect(storage.storage.removeItem('http://iamheretotalk.online')).toEqual('success');
  });
});
 


