function maiorName(names){
    let actualName = names[0];
    let maiorName = '';

    for(let key of names){

        if(key.length > actualName.length){
            maiorName = key;
        }
        actualName = key;
    }
    
    return maiorName;
}

let nomes = ['José','Lucas','Nádia','Fernanda','Cairo','Joana'];

console.log(maiorName(nomes));