export default (expenses) => {
  if (expenses.length === 0) { 
    return 0
  } else {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return expenses.map((expense) => (expense.amount)).reduce(reducer)
  }
}