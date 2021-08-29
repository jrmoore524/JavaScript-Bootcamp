//Constructor Function
const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Jesse', 'Moore', 35)
console.log(me)

const person2 = new Person('Tara', 'Moore', 35)
console.log(person2)