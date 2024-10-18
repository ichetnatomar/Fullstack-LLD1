

// function showMessage(from, text) {
//   text = text || "no text given.";
//   console.log(from + ": " + text);
// }

// showMessage("Chetna", false);

// function doNothing() {
//   return
//   1;
// }

// console.log(doNothing() === undefined);

function showPrimes(n) {
  for (let i = 2; i <= n; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}


function checkPrime(n) {
  let count_of_factors = 0;
  let x = 1;
  while (x * x <= n) {
    if (n % x == 0) {
      if (x == n / x) {
        count_of_factors += 1;
      }
      else {
        count_of_factors += 2;
      }
    }
    x++;
  }
  if (count_of_factors == 2) {
    return true;
  }
  return false;
}

// console.log(showPrimes(20));

function checkAge(age) {
  // return (age > 18) || confirm('Did your parents allow?');

}

let age = 9;
// alert(checkAge(age));node functions.jsnode functions.js

// let ans = (age > 18)? "age is valid" : confirm("Did your parents allow?");

// alert(ans);

function minOfTwoNumbers(a, b) {
  // if(a < b){
  //   return a;
  // }
  // return b;

  return ((a < b) ? a : b);

}

let a = 20;
let b = 20;
console.log(minOfTwoNumbers(a, b));





