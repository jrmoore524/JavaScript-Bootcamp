const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Jesse',
    age: 35
}, {
    name: 'Tara',
    age: 36
}, {
    name: 'Maddy',
    age: 12
}]

//Regular function syntax
// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

//Arrow function syntax
const under30 = people.filter((person) => person.age < 30) 
console.log(under30)

//Find the person with the age 35
//Print that persons name

const person = people.find((person) => person.age === 35)
console.log(person.name)