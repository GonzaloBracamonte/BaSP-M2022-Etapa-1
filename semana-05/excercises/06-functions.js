function operator(num1, num2){
  return num1 + num2
}
var answer = operator(6,22)
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
var answer = operator(2,6)
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

