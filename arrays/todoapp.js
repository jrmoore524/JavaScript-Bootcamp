//Create todo array of objects
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
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

//Create sortTodos function
const sortTodos = function (todos) {
    todos.sort(function (a ,b) {
        if (!a.completed && b.completed) {
            return -1
        }else if (!b.completed && a.completed) {
            return 1
        }else {
            return 0
        }
    })
}

//Create deleteTodo function
const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

//Create getThingsToDo function
const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed 
    })
}

sortTodos(todos)
console.log(todos)

//Output things to do
//console.log(getThingsToDo(todos))

//deleteTodo(todos, '!!buy food')
//console.log(todos)
