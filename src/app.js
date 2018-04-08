import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})
 
const expense1 = store.dispatch(addExpense({ description: 'Water', amount: 1000, createdAt: -1000}))
const expense2 = store.dispatch(addExpense({ description: 'Power', amount: 200, createdAt: 1000}))
const expense3 = store.dispatch(addExpense({ description: 'Rent', amount: 300, createdAt: 10000}))

store.dispatch(setTextFilter('RENT'))

ReactDOM.render(<AppRouter/>, document.getElementById('app'))
