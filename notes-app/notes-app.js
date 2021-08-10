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
document.querySelector('button').addEventListener('click', function (event) {
    event.target.textContent = 'The button was clicked'
}) 
