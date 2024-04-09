function wordle(word, guess){
    const rightWord = word.toLowerCase().split('');
    const guessingWord = guess.toLowerCase().split('');    
    const correct = []

    for(let i = 0; i < rightWord.length; i++){
        if(rightWord[i] === guessingWord[i]){
            correct[i] = { letter: guessingWord[i], result: "Correct" }
            rightWord[i] = null
        } else {
            correct[i] = { letter: guessingWord[i], result: "Incorrect" }
        }
    }


    for(let i = 0; i < rightWord.length; i++){
        if(correct[i].result.includes('Incorrect') && rightWord.includes(guessingWord[i])){
            correct[i].result = 'Misplaced'
            rightWord[rightWord.indexOf(guessingWord[i])] = null;
        }
    }
    return correct;
}

module.exports = wordle;