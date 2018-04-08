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
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

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
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

// FILTERS REDUCER
// Set text filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// sort by date
const sortByDate = () => ({
  type: 'SET_SORT_BY_FILTER',
  sortBy: 'date'
})
// sort by amount
const sortByAmount = () => ({
  type: 'SET_SORT_BY_FILTER',
  sortBy: 'amount'
})
// set start date

// set end date


const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_SORT_BY_FILTER':
      return {
        ...state,
        sortBy: action.sortBy
      }
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

// SUBSCRIPTION

store.subscribe(() => {
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 200}))
const expenseThree = store.dispatch(addExpense({ description: 'Cum', amount: 300}))
store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(removeExpense({ id: expenseThree.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

store.dispatch(setTextFilter('rent'))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())

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


const user = {
  name: 'Jen',
  age: 25
}

console.log({
  ...user,
  sex: 'female',
  age: 69
})