export default (expenses) => {
  if (expenses.length === 0) { 
    return 0
  } else {
    return expenses
      .map((expense) => expense.amount / 100)
      .reduce((sum, currentValue) => sum + currentValue, 0)
  }
}