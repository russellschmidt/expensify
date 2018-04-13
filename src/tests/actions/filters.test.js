import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters'
import moment from 'moment'

test('should generate setStateDate action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate sortByDate action object', () => {
  const action = sortByDate()
  expect(action).toEqual({type: 'SORT_BY_DATE'})
})

test('should generate sortByAmount action object', () => {
  const action = sortByAmount()
  expect(action).toEqual({type: 'SORT_BY_AMOUNT'})
})

test('should generate setTextFilter with empty string action object', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should generate setTextFilter with string action object', () => {
  const text = 'This is a filter'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'This is a filter'
  })
})
