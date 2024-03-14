const wordle = require('../wordle.js');

test('Test to see if all is correct: Word: hej, Guess, hej', () => {

    const result = wordle('hej', 'hej')

    expect(result[0]).toEqual('h - correct');
    expect(result[1]).toEqual('e - correct');
    expect(result[2]).toEqual('j - correct');
})

test('Simple test for Correct/Incorrect: Word: cow, Guess: wow', () => {

const result = wordle('cow', 'wow');

    expect(result[0]).toEqual('w - incorrect');
    expect(result[1]).toEqual('o - correct');
    expect(result[2]).toEqual('w - correct');
});

test('More advanced to see if "a" and "l" get correct status: Word: cykla, Guess: hallå', () => {

    const result = wordle('cykla', 'hallå');

    expect(result[0]).toEqual('h - incorrect');
    expect(result[1]).toEqual('a - misplaced');
    expect(result[2]).toEqual('l - incorrect');
    expect(result[3]).toEqual('l - correct');
    expect(result[4]).toEqual('å - incorrect');
})


