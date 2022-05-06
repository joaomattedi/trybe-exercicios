// const fatorial = (number) => {
//   let sum = 1;
//   for(let i = 1; i <= number; i += 1){
//     sum *= i;
//   }
//   return sum;
// }

// console.log(fatorial(4));

const fator = number => number > 1 ? number * fator(number-1) : 1;

console.log(fator(4));