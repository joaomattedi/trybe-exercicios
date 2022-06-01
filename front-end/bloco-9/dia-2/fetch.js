const fetch = require('node-fetch');

const fetchJoke = () => {
  // const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  const url = 'https://pokeapi.co/api/v2/pokemon/charmander';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.abilities.map(({ability})=> ability.name)))
    .catch((error) => console.log(`Acorda Pedrinho deu um erro aqui, ${error}`));
}

fetchJoke();