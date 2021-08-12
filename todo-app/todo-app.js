//Create todo array of objects
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: false
}]

const filters = {
    searchText: ''
}
//Output the todos
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

    //Show the filtered todos on the page
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

//Function calls
renderTodos(todos, filters)

//Filter todos event handler
document.querySelector('#filter-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

//New todo submit event handler
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    //Prevent default form submission
    e.preventDefault()
    //Push new todo to the list
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })
    //Print the todos
    renderTodos(todos, filters)
    //Clear the todo input box
    e.target.elements.todoText.value = ''
})







