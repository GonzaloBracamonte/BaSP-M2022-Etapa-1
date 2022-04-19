var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
console.log("ex03-strings-A = " + months[5] + " y " + months[11]);

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
var sort = months.sort();
console.log("ex03-strings-B = " + sort);

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
months.unshift("Primer element");
months.push("Ultimo element");
console.log("ex03-strings-C = " + months)

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
months.shift();
months.pop();
console.log("ex03-strings-D = " + months)

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
const reverse = months.reverse();
console.log("ex03-strings-E = " + reverse)

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
const join = months.join("-")
console.log("ex03-strings-F = " + join);

var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
var slice = months.slice(4,11);
console.log("ex03-strings-G = " + slice);