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
    //Clear all notes from the DIV
    document.querySelector('#notes').innerHTML = ''

    //Output filtered notes to the page
    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
    event.target.textContent = 'The button was clicked'
}) 

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector("#search-text").addEventListener('input', function (event) {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})


