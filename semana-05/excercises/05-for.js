var array = ["arreglo", "iteracion", "programacion", "for", "curso",]
for (let i = 0; i < array.length; i++) {
    console.log("ex05-for-A = " + array[i]);
}

/*var array = ["Arreglo", "Iteracion", "programacion", "for", "curso",]
for (let i = 0; i < 5; i++){
    cont = i;
    if (array[i] != array[i].charAt(0).toUpperCase() + array[i].substring(1)) {
        array[i] = array[i].charAt(0).toUpperCase();
        cont++;
    }
}
console.log("ex05-for-B = " + cont + " palabras han sido cambiadas");*/

var sentence = [];
for (let i = 0; i < array.length; i++) {
    sentence[i] = array[i];
}
console.log("ex05-for-C = " + sentence)
