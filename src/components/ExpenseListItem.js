import React from 'react'
import {Link} from 'react-router-dom'

export const ExpenseListItem = (props) => (
  <tr>
    <td><Link to={`/edit/${props.id}`}>{props.description}</Link></td>
    <td>${(props.amount / 100).toFixed(2)}</td>
    <td>{props.createdAt}</td>
  </tr>
)

export default ExpenseListItem