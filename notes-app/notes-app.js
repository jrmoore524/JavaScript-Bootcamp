const notes = [{
    title: 'My Next Trip',
    body: 'I would like to go to Spain', 
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better',
}, {
    title: 'Office Modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}
//Render notes function
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    //Clear all notes from the DIV when filtering
    document.querySelector('#notes').innerHTML = ''

    //Output filtered notes to the page
    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

//Call render notes function
renderNotes(notes, filters)

//Create note click event handler
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
}) 

//Search text input event handler
document.querySelector("#search-text").addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})