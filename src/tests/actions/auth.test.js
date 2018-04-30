import configureMockStore from 'redux-mock-store'

import {login, logout} from '../../actions/auth'

test('should set up login action object', () => {
  const uid = 'imauser123'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid: uid
  })
})

test('should set up logout action object', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})