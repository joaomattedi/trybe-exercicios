const testSum = require('./sum');

test('testando função', () => {
  expect(testSum(5,4)).toBe(9);
});

test('0+0 é igual a 0', () => {
  expect(testSum(0,0)).toBe(0);
});

test('envia erro quando parametro nao é numero', () => {
  expect(() => {testSum(4,'5')}).toThrowError();
});

test('mensagem de erro é parameters must be numbers', () => {
  expect(() => {testSum(4,'5')}).toThrowError(new Error('parameters must be numbers'));
});