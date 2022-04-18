var a = "este es el ejemplo de uper case"
console.log("ex02-strings-A = " + a.toLocaleUpperCase())

var a = "Como mostrar cierta cantidad de caracteres"
var b = a.substring(0,5)
console.log("ex02-strings-B = " + b)

var a = "Otra forma de mostrar cierta cantidad de caracteres";
var b = a.substring(51 , 48);
console.log("ex02-strings-C = " + b);

var a = "eSTO ES UN EJEMPLO DE UPPER Y LOWER CASE";
var b = a.substring(0,1).toUpperCase() + a.substring(1,10).toLowerCase();
console.log("ex02-strings-D = " + b)

var a = "Ejemplo de mostrar la posicion de un caracter especifico";
var b = " ";
var c = a.indexOf(b);
console.log("ex02-strings-E = " + c);

var a = "concatenacion descriptiva"
var b = a.substring(0,1).toUpperCase() + a.substring(1,13).toLowerCase();
//var c = a.indexOf(" ");
//console.log(c) 
//Con la variable c logro encontrar el espacio que separa cada palabra y asi utilizar dicho indice
var d = a.substring(14,15).toUpperCase() + a.substring(15,25).toLowerCase() ;
console.log("ex02-strings-F = " + b + " " + d)