function maiorIndice (array){
    let maiorIndice = 0;
    let number = array[0];
    for(let i = 0; i < array.length; i += 1){
    
        if(array[i] > number){
            maiorIndice = i;
        }
        number = array[i];
    }

    return maiorIndice;
}

let numbers = [2,3,6,7,10,1];

console.log(maiorIndice(numbers));