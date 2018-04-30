import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses, removeExpense, editExpense } from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import {firebase} from './firebase/firebase'

const store = configureStore()

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
})
 
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // fetch correct expenses for user
    // go to dashboard
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    renderApp()
    history.push('/')
  }
})