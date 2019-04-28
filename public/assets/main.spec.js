var main = require("./main");

describe("isUrlValid", () => {

  it("check if url is valid", () => {
    expect(main.isUrlValid('http:/ne')).toEqual(false);
  });

  it("check if url is valid", () => {
    expect(main.isUrlValid('http:wedd')).toEqual(false);
  });

});
 

describe("extractNameFromUrl", () => {

  it("get name from url", () => {
    expect(main.extractNameFromUrl('http://iamheretotalk.online')).toEqual('iamheretotalk.online');
  });

});
 

describe("doesUrlExist", () => {

  it("check if url exists", () => {
    expect(main.doesUrlExist('http://iamheretotalk.online')).toEqual(true);
  });

  it("url does not exist", () => {
    expect(main.doesUrlExist('http://sefl-awdkn.com')).toEqual(false);
  });

});




