var a = "This is the upper case example"
console.log("ex02-strings-A = " + a.toLocaleUpperCase())

var a = "How to display certain amount of characters"
var b = a.substring(0,5)
console.log("ex02-strings-B = " + b)

var a = "Another way to display certain number of characters";
var b = a.substring(51 , 48);
console.log("ex02-strings-C = " + b);

var a = "tHIS IS AN EXAMPLE OF UPPER AND LOWER CASE";
var b = a.substring(0,1).toUpperCase() + a.substring(1,10).toLowerCase();
console.log("ex02-strings-D = " + b)

var a = "Example of displaying the position of a specific character";
var b = " ";
var c = a.indexOf(b);
console.log("ex02-strings-E = " + c);

var a = "descriptive concatenation"
var b = a.substring(0,1).toUpperCase() + a.substring(1,13).toLowerCase();
//var c = a.indexOf(" ");
//console.log(c) 
//Con la variable c logro encontrar el espacio que separa cada palabra y asi utilizar dicho indice
var d = a.substring(14,15).toUpperCase() + a.substring(15,25).toLowerCase() ;
console.log("ex02-strings-F = " + b + " " + d)