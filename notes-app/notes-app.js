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
// DOM -> Document Object Model

//Query and remove from HTML
// const p = document.querySelector('p')
// p.remove()

//Query all and remove from HTMl
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '******'
    //console.log(p.textContent)
    //p.remove()
})

//Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)
