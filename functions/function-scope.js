//Global Scope (convertFahrenheitToCelsiusm tempOne, tempTwo)
    //Local Scope(fahrenheit, celsius)
        //LocalScope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9
    return celcius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)