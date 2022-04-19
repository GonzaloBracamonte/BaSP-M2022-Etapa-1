var answer = operator1(6,22)
function operator1(num1, num2){
  return num1 + num2
}
console.log("ex06-functions-A = " + answer)

function operator2(num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
    console.log("One of the fields is incorrect")
    return NaN
  } else{
    return num1 + num2
  }
}
var answer = operator2(21,64)
console.log("ex06-functions-B = " + answer)

function isInt(value) {
  if (value === parseInt(value, 10)){
    return true
  }
  else{
    return false
  }
}
var answer = isInt(30)
console.log("ex06-functions-C = " + answer)

var answer = operator3(7, 2)
function operator3(num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
    console.log("One of the fields is incorrect")
    return NaN
  } 
  else if (num1 === parseInt(num1, 10) &&
    num2 === parseInt(num2, 10))
  {
    return num1 + num2
  } 
  else if (num1 === parseFloat(num1, 10) ||
    num2 === parseFloat(num2, 10))
    {
      console.log("ERROR" +" "+ Math.round(num1) + " " + Math.round(num2))
    }
}
console.log("ex06-functions-D = " + answer)

function validate(Num1, Num2){
  if (isNaN(Num1) || isNaN(Num2)) {
    console.log("One of the fields is incorrect")
    return NaN
  } 
  else if (Num1 === parseInt(Num1, 10) &&
    Num2 === parseInt(Num2, 10))
  {
    return Num1 + Num2
  } 
  else if (Num1 === parseFloat(Num1, 10) ||
    Num2 === parseFloat(Num2, 10))
    {
      console.log("ex06-functions-E = " + "Error! One of the following numbers will be rounded" +" "
      + Math.round(Num1) + " " + Math.round(Num2))
    }
}

function Operator(){
  var newResult = validate(6, 5)
  console.log("ex06-functions-E = " + newResult)
}
Operator();