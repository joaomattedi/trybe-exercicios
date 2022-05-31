// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails(({ name }) => name === 'xablau', (error,message) =>{
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    });
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    getPokemonDetails(({ name }) => name === 'Bulbasaur',(error,message) =>{
      expect(message).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    });
  });
});