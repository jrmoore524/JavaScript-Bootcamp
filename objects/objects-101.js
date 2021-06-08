let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge
//Model a person

let person = {
    name: 'Jesse',
    age: 35, 
    location: 'Arlington, TX'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)

person.age += 1

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)



