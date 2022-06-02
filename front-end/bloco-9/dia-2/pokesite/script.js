const pokeApi = 'https://pokeapi.co/api/v2/pokemon/'
const searchButton = document.getElementById('searchButton');

const fetchPokemon = (pokemon) => {
  fetch(`${pokeApi}${pokemon}`)
    .then((response) => response.json())
    .then(({name}) => {
      
      createDivs(name)


    })
    .catch((error) => {
      console.log(error)
      window.alert('Pokemon Inválido')
    })
}

const createDivs = (name) => {
  const pokemonName = document.createElement('div');
  pokemonName.innerText = name.toUpperCase();
  document.querySelector('.infos').appendChild(pokemonName);
}

searchButton.addEventListener('click', () => {
  const pokemon = document.getElementById('pokemonName');
  if (pokemon.value !== '') {
    const pokeLowerCase = pokemon.value.toLowerCase();
    fetchPokemon(pokeLowerCase);
  } else {
    window.alert('Digite o nome de um pokemon')
  }
  pokemon.value = '';
});
