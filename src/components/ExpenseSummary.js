import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import getExpenseTotal from '../selectors/expenses-total'

export const ExpenseSummaryPage = (props) => {
  const formattedExpense = numeral(getExpenseTotal(props.expenses)).format('$0, 0.00')
  const expenseCount = props.expenses.length
  return (
    <div>
      <h3>Viewing {expenseCount} expense{ expenseCount === 1 ? '' : 's'} totaling {formattedExpense} </h3> 
    </div>
    )
  }

const mapStateToProps = (state, props) => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseSummaryPage)
