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

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    //Get the incompleted todos
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    //Clear all todos from the filtered list
    document.querySelector('#todos').innerHTML = ''

    //Show a summary of incomplete todos on the page
    const summary = document.createElement('h2') 
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    //Show all of the todos on the page
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

//Listen to new todo creation
document.querySelector('#add-todo').addEventListener('click', function (event){
    console.log('Add a new todo')
})

document.querySelector('#new-todo-text').addEventListener('input', function (event) {
    console.log(event.target.value)
})

document.querySelector('#search-text').addEventListener('input', function(event) {
    filters.searchText = event.target.value
    renderTodos(todos, filters)
})





