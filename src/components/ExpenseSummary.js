import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import {Link} from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import getExpenseTotal from '../selectors/expenses-total'

export const ExpenseSummaryPage = (props) => {
  const formattedExpense = numeral(getExpenseTotal(props.expenses)).format('$0, 0.00')
  const expenseCount = props.expenses.length
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> expense{ expenseCount === 1 ? '' : 's'} totaling <span>{formattedExpense}</span></h1>
        <div className="page-header__actions">
          <Link className="page-header__button" to="/create">Add Expense</Link>
        </div>
      </div> 
    </div>
    )
  }

const mapStateToProps = (state, props) => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseSummaryPage)
