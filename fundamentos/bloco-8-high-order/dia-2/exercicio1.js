const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function authorBornIn1947(array) {
  // escreva aqui o seu código
  return array.find((item) => item.author.birthYear === 1947)
}

// console.log(authorBornIn1947(books))

function smallerName(array) {
  let nameBook;
  // escreva aqui o seu código
  array.forEach(element => {
    if (nameBook === undefined) {
      nameBook = element.name;
    }

    if  (element.name.length < nameBook.length) {
      nameBook = element.name;
    }

  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// console.log(smallerName(books))

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

function getNamedBook(array) {
  // escreva seu código aqui
  return array.find((item) => item.name.length === 26)
}

// console.log(getNamedBook(books))

// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

function booksOrderedByReleaseYearDesc(array) {
  // escreva aqui seu código
  return array.sort((a, b) => b.releaseYear - a.releaseYear)
}

// console.log(booksOrderedByReleaseYearDesc(books));

// const expectedResult = false;

function everyoneWasBornOnSecXX(array) {
  // escreva seu código aqui
  return array.every((item) => item.author.birthYear > 1901 && item.author.birthYear < 2000)
}

// console.log(everyoneWasBornOnSecXX(books));

// const expectedResult = true;

function someBookWasReleaseOnThe80s(array) {
  // escreva seu código aqui
  return array.some((item) => item.releaseYear >= 1980 && item.releaseYear < 1990)
}

// console.log(someBookWasReleaseOnThe80s(books));

// const expectedResult = false;

function authorUnique(array) {
  // escreva seu código aqui
  return array.every((book) =>
    !array.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));  
}

console.log(authorUnique(books));