function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const array = [1, 2, 3, 4];

test('myRemove function',() => {
  expect([1, 2, 4]).toEqual(myRemove(array,3));
});
test('myRemove function',() => {
  expect([1, 2, 3, 4]).not.toEqual(myRemove(array,3));
});
test('myRemove function',() => {
  expect([1, 2, 3, 4]).toEqual(myRemove(array,5));
});