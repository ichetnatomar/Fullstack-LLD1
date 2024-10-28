let nums = [1, 2, 3, 4, 5];

//Using Imperative

function calculateSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}
let finalSum = calculateSum(nums);
console.log(`Using Imperative: ${finalSum}`);

//Using Imperative and Arrow function:-

let findSum = (nums) => {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    x = x + nums[i];
  }
  return x;
};

let sum1 = findSum(nums);

console.log(`using arrows: ${sum1}`);


//Using Reduce:

// let finalSum2 = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(`Using reduce, and arrows: ${sum2}`);


function calculateSumUsingReduce(nums) {
  let sum3 = nums.reduce((acc, curr) => acc + curr, 0);
  return sum3;
}

let finalSum3 = calculateSumUsingReduce(nums);
console.log(`using function for reduce and arrow: ${finalSum3}`);

function calculateSumUsingReduce2(nums){
  let sum = nums.reduce((acc, curr) =>{
    acc = acc + curr;
    return acc;
  },0);
  return sum;
}

let finalSum4 = calculateSumUsingReduce2(nums);
console.log(`using function for reduce and arrows and brackets: ${finalSum4}`);

// function findSum2(a, b) {
//   return a + b;
// }

// let findSum3 = (c, d) => c + d;

// let sum4 = nums.reduce(findSum2, 0);
// let sum5 = nums.reduce(findSum3, 0);

// let sum6 = nums.reduce((a, b) => a + b, 0);

// console.log(`Using reduce: ${calculateSumUsingReduce(nums)}`);
// console.log(`Using reduce: ${sum4}`);
// console.log(`Using reduce: ${sum5}`);
// console.log(`Using reduce: ${sum6}`);

