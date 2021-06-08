//Global (name)
    //Local (name)
        //Local (name)
    //Local

let name = 'Jesse'

//Variable shadowing
if (true) {
    let name = 'Tara'

    if (true) {
        name = 'Maddy'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}