import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(expense)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (expense) => dispatch(editExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(EditExpensePage)

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm 
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense))
//           props.history.push('/')
//         }}
//       />

//       <button onClick={() => {
//         props.dispatch(removeExpense(props.expense))
//         props.history.push('/')
//       }}>Remove</button>
//     </div>
//   )
// }

// const MapStateToProps = (state, props) => {
//   return {
//     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
//   } 
// }


// export default connect(MapStateToProps)(EditExpensePage)