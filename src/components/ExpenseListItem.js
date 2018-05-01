import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <Link to={`/edit/${id}`} className="list-item">
    <div>
      <h3>{description}</h3>
      <span>{numeral(amount / 100).format('$0, 0.00')}</span>
    </div>
    
    <h3>{moment(createdAt).format('MMM Do YYYY')}</h3>
    
  </Link>
)

export default ExpenseListItem