const add = (a, b) => a + b
const generateGreeting = (name = 'anon') => `Hello ${name}`
 
test('should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('should include name in return value', () => {
  const name = generateGreeting('Bob')
  expect(name).toBe('Hello Bob')
})

test('should include name in return value', () => {
  const name = generateGreeting()
  expect(name).toBe('Hello anon')
})

