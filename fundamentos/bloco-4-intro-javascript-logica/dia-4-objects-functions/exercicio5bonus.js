let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

for(let key in moradores.blocoUm){
    console.log(moradores.blocoUm[key].nome + ' ' + moradores.blocoUm[key].sobrenome);
}

for(let key in moradores.blocoDois){
    console.log(moradores.blocoDois[key].nome + ' ' + moradores.blocoDois[key].sobrenome);
}