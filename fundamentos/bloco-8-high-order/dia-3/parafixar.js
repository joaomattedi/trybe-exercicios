const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const fullList = (products,prices) => {
  return products.map((element,index) => ({ [element]: prices[index]}))
}

console.log(fullList(products,prices));