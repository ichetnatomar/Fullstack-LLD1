let radius = 0;

function getRadius(calcArea, calcCircumference, calcDiameter){
  radius = prompt("Enter radius", 0);
  calcArea(radius);
  calcCircumference(radius);
  calcDiameter(radius);  
}

function calcArea(radius){
  let area = 3.14 * radius * radius;
  console.log(area);
}

function calcCircumference(radius){
  let circumference = Math.round(2*Math.PI*radius*100)/100;
  console.log(circumference);
}

function calcDiameter(radius){
  let diameter = 2 * radius;
  console.log(diameter);
}

getRadius(calcArea, calcCircumference, calcDiameter);