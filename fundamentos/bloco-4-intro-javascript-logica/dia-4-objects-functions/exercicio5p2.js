function quantidadeVezes(numbers){
    let quantVezes = 0;
    let maiorVezes = null;
    let number = null;

    for(let key of numbers){

        for(let key2 of numbers){

            if(key2 === key){
                quantVezes += 1;
            }

        }

        if(quantVezes > maiorVezes){
            maiorVezes = quantVezes;
            number = key;
        }
        quantVezes = 0;
    }

    return number;
}

let array = [2,3,2,5,8,2,3];

console.log(quantidadeVezes(array));