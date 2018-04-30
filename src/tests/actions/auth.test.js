import configureMockStore from 'redux-mock-store'

import {login, logout} from '../../actions/auth'

test('should set up login action object', () => {
  const action = login('abc123')
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 'abc123'
  })
})

test('should set up logout action object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})