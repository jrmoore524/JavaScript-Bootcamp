//Challenge (Expense Calculator)

//Create myAccount object
let myAccount = {
    name: 'Jesse Moore',
    expenses: 0,
    income: 0
}

//Create addIncome function
let addIncome = function (account, income) {
    account.income = account.income + income
}

//Create addExpense function
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//Create resetAccount function
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
//Create getAccountSummary function
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}
//Call addIncome function for $2000
addIncome(myAccount, 2000)

//Call addExpense function for $2.50
addExpense(myAccount, 2.5)

//Call addExpense function for $160
addExpense(myAccount, 160)

//Print the account summary
console.log(getAccountSummary(myAccount))

//Reset the account balances
resetAccount(myAccount)

//Print the account summary
console.log(getAccountSummary(myAccount))

