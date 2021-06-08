//Undefined for a variable
let name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
}
else {
    console.log(name)
}

//Undefined for function arguments
let square = function (num) {
    console.log(num)
}

//Undefined when nothing is returned from the function
let result = square()
console.log(result)

//Null as assigned value, undefined is done by javascript, null is done by the programmer
let age = 35
age = null

console.log(age)