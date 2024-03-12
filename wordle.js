function wordle(word, guess){
    
    const correct = []

    for(let i = 0; i < word.length; i++){
        let letter = guess.charAt(i);
        if(word[i] === letter){
            correct.push(letter + " - correct");
        } else if(word.includes(letter)){
            if(letter === guess[word.indexOf(letter)]){
                correct.push(letter + " - incorrect");
            } else {
                correct.push(letter + " - misplaced");
            }
        } else {
            correct.push(letter + " - incorrect");
            
        }
    }
    // return correct.map((obj) => console.log(obj));
    return correct;
};

wordle('cykla', 'hallå').map((obj) => console.log(obj));

module.exports = wordle;