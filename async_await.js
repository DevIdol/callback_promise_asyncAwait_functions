function add(nums) {
  return new Promise((res, rej) => {
    if (Array.isArray(nums)) {
      const result = nums.reduce((a, b) => a + b)
      res(result)
    } else {
      rej()
    }
  })
}

async function sum(nums) {
  let result = await add(nums)
  console.log(`Result=> ${result}`)
}

sum([1, 2])

async function sum(nums){
    try{
        let result = await add(nums)
        console.log(`Result=> ${result}`)
    }catch{
        console.log('Something Wrong!')
    }
}

sum(1)
console.log('This is Async And Await')
