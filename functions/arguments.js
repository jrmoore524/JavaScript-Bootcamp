//Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)
console.log('\b')

//Default arguments
let getScoreText= function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}` //Using a template string
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)
console.log('\b')

//Challenge/ Create a tip calculator

//getTip function
let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}` //Using a template string
}

console.log(getTip(100))
console.log('\b')

//Using template strings
let name = 'Madeleine'
let age = 12
console.log(`Hey, my name is ${name}! I am ${age} years old!`) //Using a template string