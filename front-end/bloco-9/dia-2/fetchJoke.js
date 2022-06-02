// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  try {
    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    changeText(data.joke);
  } catch (error) {
    console.log(error);
  }
};

const changeText = (data) => {
  const text = document.getElementById('jokeContainer');
  text.innerHTML = data;
}

window.onload = () => fetchJoke();