//CRUD Local Storage (Create, Read, Update, Delete)

//Add data to local storage
localStorage.setItem('location', 'Texas')
//Read data from local storage
console.log(localStorage.getItem('location'))
//Remove item from local storage
localStorage.removeItem('location')
//Clear everything from local storage
localStorage.clear()