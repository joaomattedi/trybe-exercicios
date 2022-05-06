let oddsAndEvens = [13, 3, 4, 10, 7, 2];

const reordenate = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j + 1] < array[j]) {
        const guardar = array[j];
        array[j] = array[j + 1];
        array[j + 1] = guardar;
      }   
    }
  }
  return array;
}

console.log(`Os números ${reordenate(oddsAndEvens)} se encontram ordenados de forma crescente\!`); // será necessário alterar essa linha 😉
console.log(`Os números ${oddsAndEvens.sort()} se encontram ordenados de forma crescente\!`); // será necessário alterar essa linha 😉
