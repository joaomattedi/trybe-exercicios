const coinsUrl = 'https://api.coincap.io/v2/assets';
const exchangeUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'

const promissesAllTest = async () => {
  try {
    const responses = await Promise.all([fetch(coinsUrl),fetch(exchangeUrl)]);
    const datas = await Promise.all(responses.map(async (element) => await element.json()));
    const [{data: dataCripto}, {usd:{brl: dataExchange}}] = datas;
    createLis(dataCripto,dataExchange);
  } catch (error) {
    console.log('Deu um erro aqui!');
  }
}

// const pegaCoins = async () => {
//   try {
//     const response = await fetch(coinsUrl);
//     const data = await response.json();
//     const arrayCoins = data.data;
//     const tenFirsts = arrayCoins.filter((element, index) => index <= 9);
//     createLis(tenFirsts,brlValue);
//   } catch (error) {
//     console.log(`Deu erro aqui ${error}`);
//   }
// }

// const cambios = async () => {
//   try {
//     const response = await fetch(exchangeUrl);
//     const data = await response.json();
//     brlValue = data.usd.brl;
//   } catch (error) {
//     console.log(error);
//   }
// }

const createLis = (arrayCoins, cambio) => {
  if (!cambio) cambio = 1;

  arrayCoins.forEach(({ id, symbol, priceUsd }, index) => {
    if (index <= 9) {
      const newLi = document.createElement('li');
    newLi.innerText = `${id.toUpperCase()} (${symbol}): R\$${priceUsd * cambio}`
    document.getElementById('coins').appendChild(newLi);
    }
  });
}

window.onload = () => {
  // pegaCoins();
  // cambios();
  promissesAllTest();
}