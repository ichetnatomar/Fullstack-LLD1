

let nums = [1,2,3,4,5];

function calculate(nums){
  let ans = nums.map(function(num){
    return num*num;
  });
  console.log(ans);   
}

calculate(nums);

