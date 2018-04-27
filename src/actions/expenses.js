import uuid from 'uuid'
import database from '../firebase/firebase'

// v1
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// v2 w firebase
// component calls action generator
// action generator returns function
// component dispatches function - redux doesnt allow so we need a module
// function runs - push to firebase and dispatch action to update store

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData

    const expense = {description, note, amount, createdAt}

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// Remove Expense
export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// Edit Expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})