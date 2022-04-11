function palindrome (word){
    let reverseWord = word.split('')

    reverseWord = reverseWord.reverse();

    reverseWord = reverseWord.join('');

    if(reverseWord === word){
        console.log(true);
    }else{
        console.log(false);
    }

}

palindrome('desenvolvimento')