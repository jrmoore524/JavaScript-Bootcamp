//Todo list array 
const todos = getSavedTodos()

//Filter Options
const filters = {
    searchText: '',
    hideCompleted: false
}

//Function calls
renderTodos(todos, filters)

//Event handlers

//Filter todos event handler
document.querySelector('#filter-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

//New todo submit event handler
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''
})
//Hide completed checkbox event handler
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})







