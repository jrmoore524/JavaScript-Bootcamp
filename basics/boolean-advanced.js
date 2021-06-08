//Create an account management system
let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Your account is locked! Please reset your password!')
}
else if (userRole === 'admin') {
    console.log('Welcome Administrator!')
}
else {
    console.log('Welcome User!')
}

//Challenge
let temp = 45

if (temp <= 32) {
    console.log('It is freezing outside!')
}
else if (temp >= 110) {
    console.log('It is really hot outside!')
}
else {
    console.log('Go for it. It feels great!')
}
    
