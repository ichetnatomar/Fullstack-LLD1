
// let x = prompt('x?', '');
// let n = prompt('n?', '');

let x = 2;
let n = 3;

//Using Loops
let ans = 1;
for(let i = 1; i<=n; i++){
  ans = ans * x;
}


//Using FastPower
function findPower(x, n) {
  if (n == 0) return 1;
  let halfPower = findPower(x, n / 2);
  let ans = halfPower * halfPower;
  if (n % 2 == 1) {
    ans = ans * x;
  }
  return ans;
}


//Using Normal Recursion
function power(x, n) {
  if (n == 0) return 1;
  let ans = x * power(x, n - 1);
  return ans;
}


// console.log(x && n && findPower(x, n));
// console.log(power(x, n));

// console.log(ans);



function sayHi(){
  console.log("hi");
}
// sayHi();
console.log(sayHi);
