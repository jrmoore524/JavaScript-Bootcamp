//Create a grade calculator
//students score, total possible score  
//15/20 -> you got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

//Set variables for score and total score
let score = 15
let totalScore = 20

//gradeCalc function
let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    //Set percentage to a letterGrade
    if (percent >= 90) {
       letterGrade = 'A'
    }else if (percent >= 80) {
        letterGrade = 'B'
    }else if (percent >= 70) {
        letterGrade = 'C'
    }else if (percent >= 60) {
        letterGrade = 'D'
    }else {
        letterGrade = 'F'
    }
    //Return the template string with letter grade and percent
    return `You got a ${letterGrade} (${percent}%)!`
}

//Set result to functions returned value
let result = gradeCalc(score, totalScore)

//Output the result
console.log(result)