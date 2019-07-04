export default interface userInfo {
    monthly: number,
    expenses: number,
    hours: number,
    price: number,
    calcs: {
        timeSpent: number,
        percentageOfWeeklyTimeSpent: number,
        percentageOfMonthly: number,
        percentageOfExpenses: number,
        percentageOfSaved: number
    }
}