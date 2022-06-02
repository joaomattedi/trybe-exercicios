const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  // const result = await fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => data.value)
  //   .catch((error) => console.log(`Algo deu errado :( \n${error}`));

  // console.log(result);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.