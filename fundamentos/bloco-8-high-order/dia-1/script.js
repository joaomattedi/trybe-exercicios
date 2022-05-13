const geraEmailComPonto = (fullName) => {
  const employee = {
    name: fullName,
    email:`${fullName.replace(/\s/g, '.').toLowerCase()}@trybe.com`,
  }
  return employee;
}

const geraEmailComUnderScore = (fullName) => `${fullName.replace(/\s/g, '_').toLowerCase()}@trybe.com`;

const newEmployees = () => {
  const employees = {
    id1: geraEmailComPonto('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: geraEmailComPonto('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: geraEmailComPonto('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());

// console.log(geraEmailComPonto('Joao Mattedi'));
// console.log(geraEmailComUnderScore('Joao Mattedi'));