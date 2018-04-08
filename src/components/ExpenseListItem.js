import React from 'react'

export default (props) => (
  
  <tr>
    <td>{props.description}</td>
    <td>${(props.amount / 100).toFixed(2)}</td>
    <td>{props.createdAt}</td>
  </tr>
  
)