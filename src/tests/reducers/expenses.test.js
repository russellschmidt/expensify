import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: expenses[expenses.length - 1].id + 1,
      amount: 123456,
      description: 'fubu gear',
      note: 'the best',
      createdAt: 300000000
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit_expense with valid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      amount: 987654,
      description: 'magician supplies',
      note: 'rabbits, hats, chainsaw',
      createdAt: 350000000
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[1], {id: action.id, ...action.updates} ])
})

test('should not edit_expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      amount: 12345,
      description: 'parallelogram'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(state)
})

test('should remove expense if id found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should NOT remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ])
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual( [expenses[0]] )
})
