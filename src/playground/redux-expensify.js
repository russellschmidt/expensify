import { createStore, combineReducers } from 'redux'

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