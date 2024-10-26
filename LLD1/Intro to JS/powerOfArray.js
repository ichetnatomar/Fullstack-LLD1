//given an array of numbers, calculate square and store in an array.
let numbers = [1, 2, 3, 4, 5];

//write a generic methos that takes any number and return its square

function calculateSquare(num) {
  return num * num;
}

//now write a HOF that calculates square for all numbers in an array
function calculate(numbers, cb) {
  let data = [];

  for (let i = 0; i < numbers.length; i++) {
    data.push(cb(numbers[i]));
  }
  return data;
}

let ans = calculate(numbers, calculateSquare);
console.log(ans);

