//Notes array
const notes = getSavedNotes()

//Note filters
const filters = {
    searchText: ''
}

//Call render notes function
renderNotes(notes, filters)

//Event handlers

//Create note click event handler
document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes, filters)
}) 

//Search text input event handler
document.querySelector("#search-text").addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})