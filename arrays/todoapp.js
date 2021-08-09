//Create todo array of objects
const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

//Create deleteTodo function
const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

//Create findTodo function
// const findTodo = function(todos, noteText) {
//     return todos.find(function(todos, index) {
//         return todos.text.toLowerCase() === todos.text.toLowerCase()
//     })
// }

deleteTodo(todos, '!!buy food')
console.log(todos)
