//Create myBook object
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

//Create otherBook object
let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

//getSummary function returning 2 objects for myBook
let getSummary = function (myBook) {
    return {
        summary: `${myBook.title} by ${myBook.author}`, 
        pageCountSummary: `${myBook.title} is ${myBook.pageCount} pages long`
    }
}

//getOtherSummary function returning 2 objects for otherBook
let getOtherSummary = function (otherBook) {
    return {
        summary: `${otherBook.title} by ${otherBook.author}`, 
        pageCountSummary: `${otherBook.title} is ${otherBook.pageCount} pages long`
    }
}

//Set variable equal to functions returned objects
let myBookSummary = getSummary(myBook)
let otherBookSummary =  getOtherSummary(otherBook)

//Output the books objects
console.log(myBookSummary.summary)
console.log(myBookSummary.pageCountSummary)
console.log(otherBookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

//Challenge
//Create a function - take in fahrenheit - return object with 
//fahrenheit converted to celsius and kelvin

//set temp of fahrenheit variable
let fahrenheit = 74

//convertFahrenheit function that returns the conversions as an object
let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}

//Set temps to the functions returned object
let temps = convertFahrenheit(fahrenheit)

//Print the object values
console.log(temps)