function conversaoRomanos(stringRomano){

    stringRomano = stringRomano.toUpperCase();
    let numConverse = [];
    let sum = 0;
    let romano = stringRomano.split('');
    let romanos = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }

    for(let key of romano){

        for(let key2 in romanos){

            if(key === key2){
                numConverse.push(romanos[key]);
            }
        }
    }
    
    for(let i = 0; i < numConverse.length; i += 2){
        if(i < numConverse.length - 1){
            if(numConverse[i] >= numConverse[i+1]){
                sum += (numConverse[i] + numConverse[i+1]);
            }else{
                sum += (numConverse[i+1] - numConverse[i]);
            }
        }else{
            sum += numConverse[i];
        }
    }

    return sum;
}

let romano = 'il';

console.log(conversaoRomanos(romano));