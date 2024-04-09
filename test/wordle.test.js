const wordle = require('../wordle.js');


//First test to see if function will run and fail.
//Next part of this test is to make it Succeed by "guessing" the correct word and getting "Correct" in return.
test('Test to see if all is Correct: Word: hej, Guess, hej', () => {

    const result = wordle('hej', 'hej')

    expect(result[0].result).toEqual('Correct');
    expect(result[1].result).toEqual('Correct');
    expect(result[2].result).toEqual('Correct');
})



//Now we implement the 'Incorrect' Value on one single letter for better controll of enviroment.
test('Simple test for Correct/Incorrect: Word: cow, Guess: wow', () => {

const result = wordle('cow', 'wow');

    expect(result[0].result).toEqual('Incorrect');
    expect(result[1].result).toEqual('Correct');
    expect(result[2].result).toEqual('Correct');
});

//When 'Incorrect' funcionallity works, we add 'Misplaced' on a single letter for easy control.
test('More advanced to see if "a" and "l" get Correct status: Word: cykla, Guess: hallå', () => {

    const result = wordle('cykla', 'hallå');

    expect(result[0].result).toEqual('Incorrect');
    expect(result[1].result).toEqual('Misplaced');
    expect(result[2].result).toEqual('Incorrect');
    expect(result[3].result).toEqual('Correct');
    expect(result[4].result).toEqual('Incorrect');
})

//Finnaly we take a jibberish setup of letters to confirm that multiple instanses of each status('Correct', 'Incorrect', 'Misplaced') works correctly
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