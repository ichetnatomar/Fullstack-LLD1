

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

// function showPrimes(n) {
//   for (let i = 2; i <= n; i++) {
//     if (checkPrime(i)) {
//       console.log(i);
//     }
//   }
// }


// function checkPrime(n) {
//   let count_of_factors = 0;
//   let x = 1;
//   while (x * x <= n) {
//     if (n % x == 0) {
//       if (x == n / x) {
//         count_of_factors += 1;
//       }
//       else {
//         count_of_factors += 2;
//       }
//     }
//     x++;
//   }
//   if (count_of_factors == 2) {
//     return true;
//   }
//   return false;
// }

// console.log(showPrimes(20));

// function checkAge(age) {
//   // return (age > 18) || confirm('Did your parents allow?');

// }

// let age = 9;
// alert(checkAge(age));node functions.jsnode functions.js

// let ans = (age > 18)? "age is valid" : confirm("Did your parents allow?");

// alert(ans);

// function minOfTwoNumbers(a, b) {
//   // if(a < b){
//   //   return a;
//   // }
//   // return b;

//   return ((a < b) ? a : b);

// }

// let a = 20;

// let b = 20;
// console.log(minOfTwoNumbers(a, b));
// console.log(typeof minOfTwoNumbers);
// console.log(typeof null);
// console.log(typeof function hello(){});

// let name = prompt("your name?", '');
// let choice = confirm("do you want tea?");
// alert(`${name} wants tea?: ${choice}`);
// console.log(!"");
// let str = "";
// console.log(!str);
// console.log(0 == '');

// let str = 'hello world';
// let n = str.length;

// let count = 0;
// for(let i = 0; i < n; i++){
//   let c = str.charAt(i);
//   if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U'){
//     count+=1;
//   }
// }
// console.log(count);


//function to check if a given character is an english alphabet or not
function isAlphabet(char) {
  const regex = /^[A-Za-z]$/;
  return regex.test(char);
}

let str = "a man, a plan, a canal, panama";

let n = str.length;

if (n == 0 || n == 1) {
  console.log('palin');
}

let i = 0;
let j = n - 1;

//to check if a given string is palidrome or not
while (j > i) {
  let firstChar = str.charAt(i);
  let lastChar = str.charAt(j);

  if (!isAlphabet(firstChar)) {
    i++;
  }

  else if (!isAlphabet(lastChar)) {
    j--;
  }
  else {
    if (lastChar.toLowerCase() !== firstChar.toLowerCase()) {

      console.log('not palin');

      break;
    }
    else {
      i++;
      j--;
    }
  }
}

// console.log('palin');













