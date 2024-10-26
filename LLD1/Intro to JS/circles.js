let radius = [1, 2, 3, 4, 5];
let area = [];
let circumeference = [];
let diameter = [];

// This is also a way but here All desried output will be calculated for each radius one by one.
// function calculateDetails(r, calcArea, calcCircumference, calcDiameter) {
//   ar = calcArea(r);
//   ci = calcCircumference(r);
//   dm = calcDiameter(r);
// }

// for (let i = 0; i < n; i++) {
//   let rad = radius[i];
//   calculateDetails(rad, calcArea, calcCircumference, calcDiameter);
//   area[i] = ar;
//   circumeference[i] = ci;
//   diameter[i] = dm;
// }





//Here the entire list of values is taken and then desried O/P (lets say area of ll radius) is caculated in one go...

 //this function acts like a Task-doer(mistri or tailor), give me any value(s), and tell me what you   kind of output you want(are or circum, or diam, etc). i will calculate and give you that output for all given values
function calculate(radius, cb){
  let data = [];
  for(let i = 0; i < radius.length; i++){
    let value = cb(radius[i]);
    data.push(value);
  }
  return data;
}

function calcArea(radius) {
  let area = Math.round(3.14 * radius * radius * 100) / 100;
  return area;
}

function calcCircumference(radius) {
  let circumference = Math.round(2 * Math.PI * radius * 100) / 100;
  return circumference;
}

function calcDiameter(radius) {
  let diameter = 2 * radius;
  return diameter;
}

area = calculate(radius, calcArea);
circumeference = calculate(radius, calcCircumference);
diameter = calculate(radius, calcDiameter);

console.log(radius);
console.log(diameter);
console.log(area);
console.log(circumeference);







