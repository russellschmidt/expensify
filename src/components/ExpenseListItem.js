import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <tr>
    <td><Link to={`/edit/${id}`}>{description}</Link></td>
    <td>{numeral(amount / 100).format('$0, 0.00')}</td>
    <td>{moment(createdAt).format('MMM Do YYYY')}</td>
  </tr>
)

export default ExpenseListItem