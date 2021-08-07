//Create num variable
let num = 103.941

//Print number 2 decimal places (toFixed method)
console.log(num.toFixed(2))

//Round the number (math round method)
console.log(Math.round(num))

//Round the number down (math floor method)
console.log(Math.floor(num))

//Round the number up (math ceiling method)
console.log(Math.ceil(num))



//Challenge area (Number guessing game)
//1-5 return true if correct, false if not correct

//Create makeGuess function
let makeGuess = function (guess) {
    //set min random number
    let min = 1 
    //set max random number
    let max = 5
    //Create randomNumber variable and set to random number generated
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min 

    //Return true or false if guessed number was correct
    return guess === randomNumber
}

//Print if number 1 was guessed correctly
console.log(makeGuess(1))