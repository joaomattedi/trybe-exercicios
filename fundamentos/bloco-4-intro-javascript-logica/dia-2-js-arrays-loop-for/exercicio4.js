// let numPrim = [];

// for(let i = 50; i > 0; i -= 1){

//     for(let j = 2; j < i; j += 1){
//             if(i % j != 0){
//                 numPrim.push(i);
//             }
//     }
    

// }

// console.log(numPrim);

let numPrim = [];
let maiorPrim = 0;

for(let i = 50; i > 0 ; i -= 1){

    for(let j = 2; j < i ; j += 1){
        if(i % j == 0){
            break;
        }else if(j == i-1){
            numPrim.push(i);
        }
    }

}

maiorPrim = numPrim[0];

// for(let i = 0; i < numPrim.length; i += 1){
//     if(maiorPrim > numPrim[i]){
//         break;
//     }else{
//         maiorPrim = numPrim[i];
//     }
// }

console.log(maiorPrim);