const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   data: 'this is my resolved data',
    //   name: 'rusty' 
    // })
    reject('Something went wrong!')
  }, 1500)
})

console.log('before')

promise.then((data) => {
  console.log(data.data)
}).catch((error) => {
  console.log(error)
})

console.log('after')