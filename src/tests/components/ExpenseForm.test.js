import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with data correctly', () => {
  const wrapper = shallow(<ExpenseForm {...expenses[1]} />)
  expect(wrapper).toMatchSnapshot()
})