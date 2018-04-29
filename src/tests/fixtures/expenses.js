import moment from 'moment'

export default [
  { 
    id: "1a", 
    description: 'gum', 
    note: '', 
    amount: 195, 
    createdAt: 0},
  { 
    id: "2b", 
    description: 'rent', 
    note: 'hey', 
    amount: 109500, 
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  { 
    id: "3c", 
    description: 'credit card', 
    note: 'nope', 
    amount: 4500, 
    createdAt: moment(0).add(4, 'days').valueOf()
  }
]