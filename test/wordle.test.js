const wordle = require('../wordle.js');

//Inleder med att testa att allt blir godkänt
//Fungerar inledningsvis som ett "fail" test för att sedan bli correct.
test('Test to see if all is Correct: Word: hej, Guess, hej', () => {

    const result = wordle('hej', 'hej')

    expect(result[0].result).toEqual('Correct');
    expect(result[1].result).toEqual('Correct');
    expect(result[2].result).toEqual('Correct');
})


//Fortsätter med att testa om 'incorrect' fungerar
test('Simple test for Correct/Incorrect: Word: cow, Guess: wow', () => {

const result = wordle('cow', 'wow');

    expect(result[0].result).toEqual('Incorrect');
    expect(result[1].result).toEqual('Correct');
    expect(result[2].result).toEqual('Correct');
});


//Därefter lägger vi till 'misplaced'
test('More advanced to see if "a" and "l" get Correct status: Word: cykla, Guess: hallå', () => {

    const result = wordle('cykla', 'hallå');

    expect(result[0].result).toEqual('Incorrect');
    expect(result[1].result).toEqual('Misplaced');
    expect(result[2].result).toEqual('Incorrect');
    expect(result[3].result).toEqual('Correct');
    expect(result[4].result).toEqual('Incorrect');
})

//Slutligen ett aningen med "avancerat" test för att testa fler återkommande bokstäver än 2st.
test('Test to see if words with 3x letter is Correct', () => {
const result = wordle('eeesdfk', 'esefiee');
    expect(result[0].result).toEqual('Correct')
    expect(result[1].result).toEqual('Misplaced')
    expect(result[2].result).toEqual('Correct')
    expect(result[3].result).toEqual('Misplaced')
    expect(result[4].result).toEqual('Incorrect')
    expect(result[5].result).toEqual('Misplaced')
    expect(result[6].result).toEqual('Incorrect')
})