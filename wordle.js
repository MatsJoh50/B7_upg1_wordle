function wordle(word, guess){
    
    const correct = []

    for(let i = 0; i < word.length; i++){
        if(guess.charAt(i) == word.charAt(i)){
            correct.push(guess.charAt(i) + " - correct");
        } else if(word.includes(guess.charAt(i) )){
            correct.push(guess.charAt(i) + " - misplaced");
        } else {
            correct.push(guess.charAt(i) + " - incorrect");
            
        }
    }
    // return correct.map((obj) => console.log(obj));
    return correct;
}

wordle('cykla', 'hallå').map((obj) => console.log(obj));

module.exports = wordle;