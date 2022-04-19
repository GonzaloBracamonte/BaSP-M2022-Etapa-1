var array = ["array", "iteration", "programming", "for", "course",]
for (let i = 0; i < array.length; i++) {
    console.log("ex05-for-A = " + array[i]);
}

var Array = ["array", "iteration", "programming", "for", "course",]
var cont = 0;
for (let i = 0; i < 5; i++){
    cont = i + 1;
    Array[i] = Array[i].charAt(0).toUpperCase() + Array[i].substring(1)
}
console.log("ex05-for-B = " + cont + " word have been changed");

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
