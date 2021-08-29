const Hangman = function (word, guesses) {
    this.word = word
    this.guesses = guesses
}

const game1 = new Hangman('Buddy', 3)
console.log(game1)

const game2 = new Hangman('Car', 2)
console.log(game2)