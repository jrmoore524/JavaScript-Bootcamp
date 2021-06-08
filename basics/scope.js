//Lexical Scope (Static Scope)
//Global Scope - Defined outside of all code blocks
//Local Scope = Defined inside a code block

//In scope you can access variables defined in that scope(code block), or in a parent/ancestor scope

//Global Scope (varOne)
    //Local Scope (varTwo)
        //Local Scope (varFour)
    //Local Scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
        console.log(varFour)
    }
}

if (true) {
    let varThree = 'varThree'
    console.log(varThree)
}

console.log(varOne)
