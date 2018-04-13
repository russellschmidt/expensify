import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up remove expense action object', () => {
  const action = removeExpense({id: 'abc123'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  })
})

test('should set up edit expense action object', () => {
  const action = editExpense('abc123', {note: 'This is a note update'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { note: 'This is a note update'}
  })
})

test('should setup add expense action object with given values', () => {
  const expenseData = {
    description: 'rent',
    amount: 105000,
    createdAt: 1000000,
    note: 'This is rent booooy'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with default properties', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  })
})