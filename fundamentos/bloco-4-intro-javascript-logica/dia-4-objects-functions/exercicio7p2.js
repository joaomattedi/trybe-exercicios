function endWord(word,ending){

    wordSplit = word.split('');
    endSplit = ending.split('');

    wordSplit.reverse();
    endSplit.reverse();

    let count = 0;

    for(let i = 0; i < endSplit.length; i += 1){

        if(endSplit[i] === wordSplit[i]){
            count += 1;
        }

    }

    if(count === endSplit.length){
        return true;
    }else{
        return false;
    }
}

let stringWord = 'joaofernando';
let stringEnding = 'fernan';

console.log(endWord(stringWord,stringEnding));