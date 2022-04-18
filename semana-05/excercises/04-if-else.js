var math = Math.random();
if (math<0.5) {
    console.log("ex04-if-else-A = " + "Greater than 0,5")
} else{
    console.log("ex04-if-else-A = " + "Lower than 0,5")
}

var number = Math.random() * 100;
var age = Math.round(number)
if (age < 2) {
  console.log("ex04-if-else-B = " + "Bebe")
} else if (age <= 12) {
  console.log("ex04-if-else-B = " +  "Niño")
} else if (age <= 19){
  console.log("ex04-if-else-B = " +  "Adolescente")
} else if (age <= 30) {
  console.log("ex04-if-else-B = " + "Joven")
} else if (age <= 60){
  console.log("ex04-if-else-B = " + "Adulto")
} else if (age <= 75) {
  console.log("ex04-if-else-B = " + "Adulto mayor")
} else if (age <= 100){
  console.log("ex04-if-else-B = " + "Anciano")
}