import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
  addExpense, 
  startAddExpense, 
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense, 
  setExpenses, 
  startSetExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])
const uid='thisismytestUID'
const defaultAuthState = { auth: {uid}}

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({ id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt}
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('should set up remove expense action object', () => {
  const action = removeExpense({id: 'abc123'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  })
})

test('should remove expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[2].id
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()  //firebase returns null if not found i.e. it was deleted properly
    done()
  })
})

test('should set up edit expense action object', () => {
  const action = editExpense('abc123', {note: 'This is a note update'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { note: 'This is a note update'}
  })
})

test('should edit expense in database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = expenses[0].id
  const updates = {
    note: 'This is a note update'
  }
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().note).toBe(updates.note)
    done()
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'this is a good mouse',
    createdAt: 12345678
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should add expense with defaults to database and store', (done) =>  { 
  const store = createMockStore(defaultAuthState)
  const expenseData = {        
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})


test('should fetch expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})
