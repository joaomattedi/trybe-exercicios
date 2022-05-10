const testSum = require('./sum');

describe('function sum',() => {
  it('testando função', () => {
    expect(testSum(5,4)).toBe(9);
  });
  
  it('0+0 é igual a 0', () => {
    expect(testSum(0,0)).toBe(0);
  });
  
  it('envia erro quando parametro nao é numero', () => {
    expect(() => {testSum(4,'5')}).toThrowError();
  });
  
  it('mensagem de erro é parameters must be numbers', () => {
    expect(() => {testSum(4,'5')}).toThrowError(new Error('parameters must be numbers'));
  });
});