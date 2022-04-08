//fatorial de 10

// let fator = 10;
// let multiplicador = fator - 1;
// let valor = 0;



// for( let i = 0; i < fator; i += 1){

//     if(valor == 0){
//         valor = fator * multiplicador;
//     }else{
//         multiplicador = multiplicador - 1;
//         if(multiplicador == 0){
//             break;
//         }
//         valor *= multiplicador;
//     }
// }

// console.log(valor);

let fatorial = 10;
let resultado = fatorial;

for(let i = 1; i < fatorial; i += 1){
    resultado *= i;
}

console.log(resultado);