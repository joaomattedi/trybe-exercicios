const testSum = require('./sum');

test('testando função', () => {
  expect(testSum(5,4)).toBe(9);
});