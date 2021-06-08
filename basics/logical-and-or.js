let temp = 55

//Logical and operator, true if both sides are true
//Logical or operator, true if one side is true

if (temp >= 60 && temp  <= 90) {
    console.log('It is pretty nice out!')
}
else if (temp < 0 || temp >= 120) {
    console.log('Do not go outside!')
}
else {
    console.log('Eh, do what you want!')
}

//Challenge

let isGuestOnevegan = false
let isGuestTwoVegan = false

if (isGuestOnevegan && isGuestTwoVegan) {
    console.log('Here are the vegan dishes!')
}
else if (isGuestOnevegan || isGuestTwoVegan) {
    console.log('Here are a few vegan options!')
}
else {
    console.log('Here is everything on the menu!')
}