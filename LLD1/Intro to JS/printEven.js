let nums = [1, 2, 34, 32, 11, 35, 65, 453, 432];

//using imperative and Higher Order Function
function isEven(num) {
  let ans = (num % 2 === 0) ? true : false;
  return ans;
}

function isEvenHOF(nums, cb) {
  let data = [];
  for (let i = 0; i < nums.length; i++) {
    if (cb(nums[i])) {
      data.push(nums[i]);
    }
  }
  return data;
}
let finalAns = isEvenHOF(nums, isEven);
console.log(`Using imperative: ${finalAns}`);


//Using Declarative
//Uisng Filters
  //take a callBack fn
  //have an inbuilt loop
  //return a new array
  //work for CONDITIONS ONLY (unlike Map that work only for OPERATIONS.)

let finalAns2 = nums.filter(function (num) {
  let ans = (num % 2 === 0) ? true : false;
  return ans;
});
console.log(`using declaratve: ${finalAns2}`);



