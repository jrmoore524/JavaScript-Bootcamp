//Function - input (argument), code, output (return value)

//Greet user function
let greetUser = function () {
    console.log('Welcome user')
}
//Call the greetUser function
greetUser()

//number squared funtion
let sqaure = function (num) {
    let result = num * num
    return result
}

//Set values equal to the functions returned value using arguments passed in
let value = sqaure(3)
let otherValue = sqaure(10)

//output the values squared
console.log(value)
console.log(otherValue)

//Challenge

//convert fahrenheit to celsius function
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9
    return celcius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)