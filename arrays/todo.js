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

//Output the todo list
console.log(todos)
