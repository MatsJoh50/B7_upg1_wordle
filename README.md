2 strängar, word + guess.
word = svaret.
guess = gissningen.

skapa en funktion med parametrar: word och guess
jämför guess[x] mot word[x]
    om x == x skriv ut correct


    om word.includes(guess[x]) = true,
        => guess[x] === guess[word.indexOf(guess[x])] om true => incorrect
    annars => skriv ut misplaced



    annars =>  skriv ut incorrect

ittirera loopen per gissning.

spara svaren i en array: anwser med guess[x] - correct/misplaced/incorrect
skriv ut svaren och låt spelaren gissa igen.
