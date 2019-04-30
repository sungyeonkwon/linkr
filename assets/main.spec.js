const main = require('./main');

const isUrlValid = main.isUrlValid;
const extractNameFromUrl = main.extractNameFromUrl;
const doesUrlExist = main.doesUrlExist;

describe('isUrlValid', () => {
  it('check if url is valid', () => {
    const url = 'http:/ne';
    expect(isUrlValid(url)).toEqual(false);
  });

  it('check if url is valid', () => {
    const url = 'https://jestjs.io/';
    expect(isUrlValid(url)).toEqual(true);
  });

  it('check if url is valid', () => {
    const url = 'https://bost.ocks.org/mike/algorithms/';
    expect(isUrlValid(url)).toEqual(true);
  });

  it('check if url is valid', () => {
    const url = 'http://223.255.255.254';
    expect(isUrlValid(url)).toEqual(true);
  });
});

describe('extractNameFromUrl', () => {
  it('get name from url', () => {
    const url = 'https://jestjs.io/';
    expect(extractNameFromUrl(url)).toEqual('jestjs.io');
  });

  it('get name from url', () => {
    const url = 'https://bost.ocks.org/mike/algorithms/';
    expect(extractNameFromUrl(url)).toEqual('bost.ocks.org');
  });

  it('get name from url', () => {
    const url = 'http://foo.com/blah_blah_(wikipedia)_(again)';
    expect(extractNameFromUrl(url)).toEqual('foo.com');
  });
});

describe('doesUrlExist', () => {
  it('check if url exists', () => {
    const url = 'https://phantom.land/work/';
    expect.assertions(1);
    return doesUrlExist(url).then(data => expect(data).toEqual('success'));
  });

  it('check if url exists', () => {
    const url = 'http://iamheretotalk.online';
    expect.assertions(1);
    return doesUrlExist(url).then(data => expect(data).toEqual('success'));
  });

  it('check if url DOES NOT exist', () => {
    const url = 'http://ise.leknf';
    return doesUrlExist(url).catch(data => expect(data).toMatch('fail'));
  });

  it('check if url DOES NOT exist', () => {
    const url = 'some gibberish';
    return doesUrlExist(url).catch(data => expect(data).toMatch('fail'));
  });
});
