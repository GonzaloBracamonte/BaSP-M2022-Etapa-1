var array = ["arreglo", "iteracion", "programacion", "for", "curso",]
for (let i = 0; i < array.length; i++) {
    console.log("ex05-for-A = " + array[i]);
}

/*var Array = ["arreglo", "iteracion", "programacion", "for", "curso",]
var cont = 0;
for (let i = 0; i < 5; i++){
    i++
    if (Array[i] != Array[i].charAt(0).toUpperCase() + Array[i].substring(1)) {
        Array[i].charAt(0).toUpperCase();
    }
}
console.log("ex05-for-B = " + i + " palabras han sido cambiadas");*/

var sentence = [];
for (let i = 0; i < array.length; i++) {
    sentence[i] = Array[i];
}
console.log("ex05-for-C = " + sentence)

var number = []
for (let i = 0; i < 10; i++) {
    number += i 
    number[i]
}
console.log("ex05-for-D = " + number)