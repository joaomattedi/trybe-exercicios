function menorIndice (array){
    let menorIndice = 0;
    let number = array[0];
    for(let i = 0; i < array.length; i += 1){
    
        if(array[i] < number){
            menorIndice = i;
        }
        number = array[i];
    }

    return menorIndice;
}

let numbers = [2,4,6,7,10,0,-3];

console.log(menorIndice(numbers));