const wordle = require('../wordle.js');

test('Test to see if all is Correct: Word: hej, Guess, hej', () => {

    const result = wordle('hej', 'hej')

    expect(result[0]).toEqual('h - Correct');
    expect(result[1]).toEqual('e - Correct');
    expect(result[2]).toEqual('j - Correct');
})

test('Simple test for Correct/Incorrect: Word: cow, Guess: wow', () => {

const result = wordle('cow', 'wow');

    expect(result[0]).toEqual('w - Incorrect');
    expect(result[1]).toEqual('o - Correct');
    expect(result[2]).toEqual('w - Correct');
});

test('More advanced to see if "a" and "l" get Correct status: Word: cykla, Guess: hallå', () => {

    const result = wordle('cykla', 'hallå');

    expect(result[0]).toEqual('h - Incorrect');
    expect(result[1]).toEqual('a - Misplaced');
    expect(result[2]).toEqual('l - Incorrect');
    expect(result[3]).toEqual('l - Correct');
    expect(result[4]).toEqual('å - Incorrect');
})


test('Test to see if words with 3x letter is Correct', () => {
const result = wordle('eeesdfk', 'esefiee');
    expect(result[0]).toEqual('e - Correct')
    expect(result[1]).toEqual('s - Misplaced')
    expect(result[2]).toEqual('e - Correct')
    expect(result[3]).toEqual('f - Misplaced')
    expect(result[4]).toEqual('i - Incorrect')
    expect(result[5]).toEqual('e - Misplaced')
    expect(result[6]).toEqual('e - Incorrect')
})