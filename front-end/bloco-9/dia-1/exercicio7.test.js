// const uppercase = require('./exercicio7');

// describe('testa function uppercase', () => {
//   test('retorna tudo uppercase', (done) => {
//     uppercase('loolamano',(str) => {
//       try {
//         expect(str).toBe('LOOLAMANO');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     })
//   });
// });

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('1');
//       done();
//     } catch (error) {
//       done(error); // Alteramos esta linha
//     }
//   }, 500);
// });

// test('teste2 timeout', (done) => {
//   setTimeout(() => {
//     try {
//       expect(5).toBe(5);
//       console.log('2');
//       done();
//     } catch (error) {
//       done(error); // Alteramos esta linha
//     }
//   }, 2000);
// });

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
});