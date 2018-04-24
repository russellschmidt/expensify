import React from 'react'
import { shallow } from 'enzyme'
import {ExpenseSummaryPage} from '../../components/ExpenseSummary'

const expenses = [1,2,3]

test('should correctly render ExpensesSummaryPage with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummaryPage expenses={[1]}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummaryPage with 3 expenses', () => {
  const wrapper = shallow(<ExpenseSummaryPage expenses={expenses}/>)
  expect(wrapper).toMatchSnapshot()
})