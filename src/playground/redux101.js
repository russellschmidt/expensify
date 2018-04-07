import {createStore} from 'redux'

// Action Generators

const incrementCount = ({ incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const multiplyCount = ({ multiplyBy = 1} = {}) => ({
  type: 'MULTIPLY',
  multiplyBy
})

const divideCount = ({ divideBy = 1} = {}) => ({
  type: 'DIVIDE',
  divideBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

// reducer
const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT': 
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }
    case 'MULTIPLY':
      const multiplyBy = typeof action.multiplyBy === 'number' ? action.multiplyBy : 1
      return {
        count: state.count * multiplyBy
      }
    case 'DIVIDE':
      const divideBy = typeof action.divideBy === 'number' ? action.divideBy : 1
      return {
        count: state.count / divideBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET': 
      return {
        count: 0
      }
    default:
      return state
  }
}


// redux store
const store = createStore(countReducer)

store.subscribe( () => {
  console.log(store.getState())
})



store.dispatch(incrementCount())
store.dispatch(incrementCount({incrementBy: 10}))
// const unsubscribe = store.subscribe( () => {
//   console.log(store.getState())
// })

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(decrementCount())

store.dispatch(resetCount())

store.dispatch(setCount({count: 101}))

store.dispatch(multiplyCount())

store.dispatch(multiplyCount({multiplyBy:99}))

store.dispatch(divideCount())

store.dispatch(divideCount({divideBy: 33}))

