function operator(num1, num2){
  return num1 + num2
}
console.log("ex06-functions-A = " + answer)
var answer = operator(6,22)

function operator(num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Uno de los campos es incorrecto")
    return NaN
  } else{
    return num1 + num2
  }
}
var answer = operator(21,64)
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

var answer = operator(7, 2)
function operator(num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Uno de los campos es incorrecto")
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

