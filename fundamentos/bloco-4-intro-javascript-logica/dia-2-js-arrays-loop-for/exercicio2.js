// let word = 'tryber';
// const forLimit = word.length/2;
// let last = word.length;
// let j = last

// for(let i = 0; i < forLimit; i += 1){
//     let letter1;
//     let letter2;
//     letter1 = word[i];
//     letter2 = word[j];
//     console.log(word[i]);
//     console.log(word[j]);
    
// }

// console.log(word);

let word = 'tryber';
let reverseWord = '';

for(let i = word.length - 1; i >= 0; i -= 1){
    reverseWord += word[i];
}

console.log(reverseWord);