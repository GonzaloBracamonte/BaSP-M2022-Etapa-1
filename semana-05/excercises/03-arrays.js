const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("ex03-strings-A = " + months[5] + " y " + months[11]);

//var sort = months.sort();
//console.log("ex03-strings-B = " + sort);

//months.unshift("Primer elemento");
//months.push("Ultimo elemento");
//console.log("ex03-strings-C = " + months)

//months.shift();
//months.pop();
//console.log("ex03-strings-D = " + months)

//const reverse = months.reverse();
//console.log("ex03-strings-E = " + reverse)

const join = months.join("-")
console.log("ex03-strings-F = " + join);

