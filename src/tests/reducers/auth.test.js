import authReducer from '../../reducers/auth'

const users = {uid: 'abc123'}

test('should set default state', () => {
  const state = authReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({})
})

test('should set login and add valid uid', () => {
  const action = {
    type: 'LOGIN',
    uid: users.uid
  }
  const state = authReducer({}, action)
  expect(state).toEqual(users)
})

test('should set logout and clear uid', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer(users, action)
  expect(state).toEqual({})
})