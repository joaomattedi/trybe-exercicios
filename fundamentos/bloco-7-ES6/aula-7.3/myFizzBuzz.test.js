function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

test('myFizzBuzz function', () => {
  expect('fizzbuzz').toBe(myFizzBuzz(15));
});
test('myFizzBuzz function', () => {
  expect('fizz').toBe(myFizzBuzz(9));
});
test('myFizzBuzz function', () => {
  expect('buzz').toBe(myFizzBuzz(5));
});