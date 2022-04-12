function numbersPair(numbers){
    let numPair = [];

    for(let i of numbers){

        for(let j of i){

            if(j % 2 === 0){
                numPair.push(j);
            }
        }
    }

    return numPair;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(numbersPair(vector));