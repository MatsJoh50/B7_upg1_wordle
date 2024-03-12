const wordle = require('../wordle.js');

test('Word: cow, Guess: wow', () => {

//Set values for function.
const result = wordle('cow', 'wow');

//Control the returning objects
    expect(result[0]).toEqual('w - incorrect'); //
    expect(result[1]).toEqual('o - correct');
    expect(result[2]).toEqual('w - correct');
});

test('Word: cykla, Guess: hallå', () => {

    const result = wordle('cykla', 'hallå');

    expect(result[0]).toEqual('h - incorrect');
    expect(result[1]).toEqual('a - misplaced');
    expect(result[2]).toEqual('l - incorrect');
    expect(result[3]).toEqual('l - correct');
    expect(result[4]).toEqual('å - incorrect');
})


test('Word: hej, Guess, hej', () => {

    const result = wordle('hej', 'hej')

    expect(result[0]).toEqual('h - correct');
    expect(result[1]).toEqual('e - correct');
    expect(result[2]).toEqual('j - correct');
})