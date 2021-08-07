//Print name length (length method)
let name = ' Jesse Moore '
console.log(name.length)

//Convert to uppercase and print (upperCase method)
name.toUpperCase();
console.log(name.toUpperCase())

//Convert to lowercase and print (lowerCase method)
console.log(name.toLowerCase())

//Check if the password includes 'password' (include method)
let password = 'abc123asdf098'
console.log(password.includes('password'))

//Trim whitespace from name (trim method)
console.log(name.trim())



//Challenge (isValidPassword)
//length is more than 8 - does not contain the word password

//Create isValidPassword function and return boolean for valid password
let isValidPassword = function (password) {
   return password.length > 8 && !password.includes('password')
}

//Print if entered passwords are valid
console.log(isValidPassword('asdfp')) //not valid
console.log(isValidPassword('abc123!@#$%^&'))  //valid
console.log(isValidPassword('asdfpasdfpoijpassword')) //not valid