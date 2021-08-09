//Create todo array
const todos = ['Make my bed', 'Walk the dog', 'Clean my room', 'Take a shower', 'Brush my teeth']

//Delete the third item
todos.splice(2, 1)

//Add a new item onto the end
todos.push('Go to bed')

//Remove the first item from the list
todos.shift()

//Output the number of todos left
console.log(`You have ${todos.length} todos!`)

//Output the todos left (callback function)
todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

//Output the todos left (for loop)
// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`)
// }

