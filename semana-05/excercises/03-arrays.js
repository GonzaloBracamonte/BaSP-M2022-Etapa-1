const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log("ex03-strings-A = " + months[5] + " y " + months[11])

//months.sort()
//console.log("ex03-strings-B = " + months)

months.unshift("Primer elemento")
months.push("Ultimo elemento")
console.log("ex03-strings-C = " + months)