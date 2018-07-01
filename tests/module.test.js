const main = require('..');
const fs = require('fs');

describe('require this module', () => {
  test('Verify module members', () => {
    expect(typeof main.binaryInsertionSearch).toBe('function');
  });

  test('Verify type definition files', () => {
    expect(fs.statSync('./dist/main.d.ts').isFile()).toBeTruthy();
  });
});
