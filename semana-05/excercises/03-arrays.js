var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("ex03-strings-A = " + months[5] + " y " + months[11]);

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var sort = months.sort();
console.log("ex03-strings-B = " + sort);

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.unshift("Primer elemento");
months.push("Ultimo elemento");
console.log("ex03-strings-C = " + months)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.shift();
months.pop();
console.log("ex03-strings-D = " + months)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const reverse = months.reverse();
console.log("ex03-strings-E = " + reverse)

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const join = months.join("-")
console.log("ex03-strings-F = " + join);

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var slice = months.slice(4,11);
console.log("ex03-strings-G = " + slice);