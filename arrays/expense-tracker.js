//Create account object
const account = {
    name:'Jesse Moore',
    expenses: [],
    income: [],
    //addExpense function
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    //addIncome function
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    }, 
    //getAccountSummary
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0
        
        //total the expenses
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })

        //total the income
        this.income.forEach(function (income) {
            totalIncome += income.amount
        })

        //calculate the account balance
        accountBalance = totalIncome - totalExpenses

       //output the account summary
        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
