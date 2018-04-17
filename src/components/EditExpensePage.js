import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  onRemove = (expense) => {
    this.props.removeExpense(this.props.expense)
    this.props.history.push('/')
  }
  render() {
    return(
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm 
          expense={this.props.expense} 
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
)

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expense) => dispatch(removeExpense(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)

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