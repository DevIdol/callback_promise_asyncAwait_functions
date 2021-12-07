function add(nums) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(nums)) {
      const result = nums.reduce((a, b) => a + b)
      resolve(result)
    } else {
      reject()
    }
  })
}

let result = [1, 2]
add(result)
  .then((a) => a + 1)
  .then((b) => b + 1)
  .then((c) => console.log(`Result=> ${c}`))
  .catch(() => {
    console.log('Something Wrong!')
  })


result = 4
add(result)
  .then((a) => a + 1)
  .then((b) => b + 1)
  .then((c) => console.log(`Result=> ${c}`))
  .catch(() => {
    console.log('Something Wrong!')
  })
