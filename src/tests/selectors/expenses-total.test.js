import moment from 'moment'
import getExpensesTotal from '../../selectors/expenses-total'

const expenses = [{
  id: '1',
  description: 'rent',
  note: '',
  amount: 200,
  createdAt: moment(0).add(29.9, 'years').valueOf()
}, {
  id: '2',
  description: 'car',
  note: 'big car',
  amount: 100,
  createdAt: moment(0).add(30, 'years').valueOf()
}, {
  id: '3',
  description: 'food',
  note: 'yum',
  amount: 50,
  createdAt: moment(0).add(30.1, 'years').valueOf()
}]

// const total = getExpensesTotal(expenses)
// console.log(total)

test('should return correct result for expense array', () => {
  const result = getExpensesTotal(expenses)
  expect(result).toEqual(350)
})

test('should return 0 for empty array', () => {
  const result = getExpensesTotal([])
  expect(result).toEqual(0)
})

test('should return correct total for single item array', () => {
  const result = getExpensesTotal([expenses[0]])
  expect(result).toEqual(200)
})