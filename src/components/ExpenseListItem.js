import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'

const ExpenseListItem = (props) => (
  
  <tr>
    <td>{props.description}</td>
    <td>${(props.amount / 100).toFixed(2)}</td>
    <td>{props.createdAt}</td>
    <td><button onClick={() => {
      props.dispatch(removeExpense(props))
    }}>Remove</button></td>
  </tr>
  
)

export default connect()(ExpenseListItem)