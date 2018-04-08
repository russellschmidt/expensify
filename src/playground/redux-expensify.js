import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Add Expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// Remove Expense
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// Edit Expense
// Set text filter
// sort by date
// sort by amount
// set start date
// set end date

// Expenses reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200}))
const expenseThree = store.dispatch(addExpense({ description: 'Cum', amount: 300}))
store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(removeExpense({ id: expenseThree.expense.id }))

const demoState = {
  expenses: [{
    id: 'abc123',
    description: 'January Rent',
    note: 'This is my rent for January 3000 AD',
    amount: 54500,
    createdAt: 0
  }],
  filters: { // for sorting data
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}
