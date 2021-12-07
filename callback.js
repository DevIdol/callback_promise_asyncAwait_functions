function add(nums, resolve, reject) {
  if (Array.isArray(nums)) {
    const result = nums.reduce((a, b) => a + b)
    resolve(result)
  } else {
    reject()
  }
}

const result = [1, 2]
add(
  result,
  (result) => {
    console.log(`Result=> ${result}`)
  },
  () => console.log('Someting Wrong!'),
)

const result1 = 2
add(
  result1,
  (result) => {
    console.log(`Result=> ${result}`)
  },
  () => console.log('Someting Wrong!'),
)
