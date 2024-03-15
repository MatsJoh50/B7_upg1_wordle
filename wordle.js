function wordle(word, guess){
    const rightWord = word.toLowerCase().split('');
    const guessingWord = guess.toLowerCase().split('');    
    const correct = []

    for(let i = 0; i < rightWord.length; i++){
        if(rightWord[i] === guessingWord[i]){
            correct[i] = `${guessingWord[i]} - Correct`
            rightWord[i] = null
        } else {
            correct[i] = `${guessingWord[i]} - Incorrect`
        }
    }


    for(let i = 0; i < rightWord.length; i++){
        if(correct[i].includes('Incorrect') && rightWord.includes(guessingWord[i])){
            correct[i] = correct[i].charAt(0) + ' - Misplaced'
            rightWord[rightWord.indexOf(guessingWord[i])] = null;
        }
    }
    return correct;
}
module.exports = wordle;