function somaAntecessores(number){
    let sum = 0;

    for(let i = number; i > 0; i -= 1){

        sum += i;

    }

    return sum;
}

let n = 5;

if(n > 0){
    console.log(somaAntecessores(n));
}else{
    console.log('Insira um numero maior que zero.');
}