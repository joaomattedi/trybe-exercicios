let array = ['java', 'javascript', 'python', 'html', 'css'];

let palavraMaior = '';
let palavraMenor = array[0];

for(let i = 0; i < array.length; i += 1){

    if(array[i].length > palavraMaior.length){
        palavraMaior = array[i];
    }

}

console.log(palavraMaior);

for(let i = 0; i < array.length; i += 1){

    if(array[i].length < palavraMenor.length){
        palavraMenor = array[i];
    }

}

console.log(palavraMenor);
