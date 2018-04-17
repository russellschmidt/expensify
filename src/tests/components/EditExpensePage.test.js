import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, history, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  history = {push: jest.fn()}
  wrapper = shallow(<EditExpensePage editExpense={onSubmit} history={history}/>)
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]) 
})