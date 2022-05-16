const randomNumber = (bet) => {
  const number = Math.floor(Math.random() * 5) + 1;
  if (bet === number) {
    console.log(number);
    return `Parabéns você ganhou`;
  }
  console.log(number);
  return `Tente novamente`;
}

console.log(randomNumber(5));