import * as firebase from 'firebase'
// import moment from 'moment'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// database.ref().once('value').then((snapshot) => {
//   console.log('expenses', snapshot.val())
// })

// // read the expense items we pushed

// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log('once', expenses)
// })

// const onExpenseChange = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     })
//   })
//   console.log('on', expenses)
// })

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//   description: 'internet',
//   amount: 1010,
//   createdAt: moment().add(1,'month').valueOf(),
//   note: 'this is a timewarner'
// })

// database.ref().set(null)

// database.ref('expenses').push({
//   description: 'car',
//   amount: 1000,
//   note: 'have you ever had this car?',
//   createdAt: moment().valueOf()
// })

// database.ref('expenses').push({
//   description: 'rent',
//   amount: 2000,
//   note: 'our house is a v fine house',
//   createdAt: moment().subtract(1,'day').valueOf()
// })

// database.ref('expenses').push({
//   description: 'phone',
//   amount: 500,
//   note: 'hello moto',
//   createdAt: moment().subtract(2, 'day').valueOf()
// })

// database.ref('expenses').push({
//   description: 'insurance',
//   amount: 750,
//   note: 'insurance masurance',
//   createdAt: moment().add(1, 'day').valueOf()
// })

// // note the difference between data and data.val()
// // data here (which is an arbitrary name) 
// database.ref('expenses').once('value').then((data) => {
//   console.log(data)
//   console.log(data.val())
// })

// database.ref('notes/-LB3eJaHxUHx7cstS7Bn').update({
//   body: 'soemtime you are maggix'
// })



// database.ref('notes').push(
//   {
//     title: 'second note',
//     body: 'i luvvvv notes!'
//   }
// )

// database.ref('courses').push({
//   class: 'brain 101',
//   subject: 'brain'
// }, {
//   class: 'history mystery 102',
//   subject: 'history'
// })

// database.ref('notes').once('value').then((snapshot) => {
//   console.log(snapshot.val())
// }).catch((e) => {
//   console.log('ruh roh', e.message)
// })

// const firebaseNotes = {
//   notes: {
//     1: {
//       title: 'first note',
//       body: 'this is my note!'
//     },
//     2: {
//       title: 'second note',
//       body: 'i love notes!'
//     }
//   }
// }

// const notes = [{
//   id: 1,
//   title: 'first note',
//   body: 'this is my note!'
// }, {
//   id: 2,
//   title: 'second note',
//   body: 'i love notes!'
// }]

// database.ref().set(firebaseNotes)

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('error!', e.message)
//   })

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })

// // database.ref().update({
// //   hair: 'brown'
// // })

// setTimeout(() => {
//   database.ref('age').set((22))  
// }, 1000)

// setTimeout(() => {
//   database.ref('age').set((11))  
//   database.ref().off()
// }, 3000)

// setTimeout(() => {
//   database.ref('age').set((33))  
// }, 6000)

// database.ref().set({
//   name: 'Rusty Russhole',
//   isSingle: false,
//   age: 38,
//   location: {
//     city: 'Los Angeles',
//     state: 'CA',
//     country: 'USA'
//   },
//   stressLevel: 5,
//   job: {
//     title: 'dev',
//     company: 'Google'
//   }
// }).then(() => {
//   console.log('data is saved!')
// }).catch((e) => {
//   console.log('Error with save!', e)
// })

// // database.ref().set('hi')
// // database.ref('age').set(88)

// // database.ref('location/city').set('LALA')

// // database.ref('attributes/weight').set(250)
// // database.ref('attributes/height').set(5.92)

// // database.ref('income/monthly').set({
// //   '201801': 101,
// //   '201802': 222,
// //   '201803': 404
// // }).then((data) => {
// //   console.log('data was saved', data)
// // }).catch((error) => {
// //   console.log('error bad save bad', error)
// // })

// // database.ref('income/monthly/201803').remove()
// //   .then(() => {
// //     console.log('remove success')
// //   })
// //   .catch((e) => {
// //     console.log('problem', e.message)
// //   })

// // database.ref('income/monthly/201802').set(null)

// // database.ref().set(null)

// database.ref().update({
//   stressLevel: 9,
//   'location/city': 'Seattle',
//   'location/state': 'WA',
//   'job/company': 'Amazon'
// })

// database.ref().update({
//   'job/title': 'Developer of Softwares',
//   'job/company': 'Amazon',
//   name: 'Mike Monkey Man'
// })

// const onChange = database.ref().on('value', (snapshot) => {
//   const sp = snapshot.val()
//   console.log(`${sp.name} is a ${sp.job.title} at ${sp.job.company}`)
// }, (e) => {
//   console.log('ruh roh', e.message)
// })

// setTimeout(() => {
//   database.ref().update({
//     'job/title': 'Developer of Diorama',
//     'job/company': 'Apples',
//     name: 'Franklin Frankels'
//   })
// }, 1500)

