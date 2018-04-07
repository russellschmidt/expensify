// ES6 DESTRUCTURING

// Object Destructing
// const person = {
//   name: 'RS',
//   age: 38,
//   dicks: 14,
//   location: {
//     city: 'Los Angeles',
//     state: 'California',
//     temp: 69
//   }
// }

// // const name = person.name
// // const age = person.age
// // const city = person.location.city
// // const state = person.location.state
// // console.log(`${name} is ${age} years old and lives in ${city}, ${state}`)

// // console.log(`${person.name} is ${person.age} years old and lives in ${person.city}, ${person.state}.`)

// const {name = 'Anon', age} = person
// const {city, state, temp: temperature} = person.location
// console.log(`${name} is ${age} years old and lives in ${city}, ${state}`)

// if (city && state) {
//   console.log(`${name} is ${age} years young and lives in ${city}, ${state} where it is ${temperature} deez greez.`)
// }

// const {dicks: peniscount = 1} = person
// console.log(`${name} has ${peniscount} penises`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name: publisherName = 'self-published'} = book.publisher

// console.log(publisherName)

// ------------------
// ARRAY DESTRUCTURING

const address = ['639 S. Spring Street', 'Los Angeles', 'California', '90014-1936']
console.log(`You are in ${address[1]}, ${address[2]}`)

// bad way to do this
const street = address[0]
const city = address[1]
const state = address[2]
const zip = address[3]

console.log(`You live at ${street} in ${zip} zipcode`)

// destructure
const [,,state1] = address

console.log(`I love the great state of ${state1}`)

const [add,cty = 'New York City', st='New York', zipcode = '10001'] = address
console.log(`Send my mail to ${add} in ${cty}, ${st} ${zipcode}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75', '$3.50']

const [order, , mediumPrice] = item
console.log(`A medium ${order} costs ${mediumPrice}`)

const [muhCoffee,,,,biggie = '$4.20'] = item
console.log(`ah luv mah ${muhCoffee} and only pay ${biggie}`)
