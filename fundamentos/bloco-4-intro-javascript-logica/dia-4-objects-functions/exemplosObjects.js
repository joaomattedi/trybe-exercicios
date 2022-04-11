// let car = {
//     brand: 'Nissan',
//     model: 'Skyline R34',
//     color: 'Midnight Blue',
// };

// console.table(car);

// console.log('O ' + car.brand + ' ' + car.model + ' é o melhor carro do mundo!');
// console.log(car.model);
// console.log(car.color);

// car['fullModel'] = car.brand + ' ' + car.model;

// console.log('O ' + car.fullModel + ' é o melhor carro do mundo!');

// console.table(car);

//-----------------------------------------------------------------------------------------------------

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//     };
    
//     // diasDaSemana.1; // SyntaxError: Unexpected number  CHAVE FOR NUMERO SÓ PODE SER ACESSADA COM COLCHETES
//     console.log(diasDaSemana['1']); // domingo


//-----------------------------------------------------------------------------------------------------

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
// //   console.log(conta.infoDoBanco); // NAO FUNCIONA POIS INFODOBANCO NAO FAZ PARTE DO OBJECT CONTA

//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

//-----------------------------------------------------------------------------------------------------

// let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
// };
  
// console.log(usuario['id']); // 99  TBEM FUNCIONA COM .ID
// console.log(usuario.email); // jakeperalta@gmail.com

// console.log(usuario.infoPessoal.endereco.rua); // Smith Street
// console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//-----------------------------------------------------------------------------------------------------

// let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

// console.table(moradores);

//-----------------------------------------------------------------------------------------------------

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        gold: 2,
        silver: 3,
    },
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

console.log('A jogadora possui ' + player.medals.gold + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');