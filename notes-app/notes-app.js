//Notes array
let notes = getSavedNotes()

//Note filters
const filters = {
    searchText: ''
}

//Call render notes function
renderNotes(notes, filters)

//Event handlers

//Create note click event handler
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const timeStamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
}) 

//Search text input event handler
document.querySelector("#search-text").addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
//Filter text input event handler
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
    renderNotes(notes, filters)
})
//Storage update event handler
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

