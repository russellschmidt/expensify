import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startEditExpense, startRemoveExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  onRemove = (expense) => {
    this.props.startRemoveExpense(this.props.expense)
    this.props.history.push('/')
  }
  render() {
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1>Edit Expense</h1>
            <ExpenseForm 
              expense={this.props.expense} 
              onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove} className="remove-expense__button">
              Remove Expense
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
})

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