var math = Math.random();
if (math<0.5) {
    console.log("ex04-if-else-A = " + "Greater than 0,5")
} else{
    console.log("ex04-if-else-A = " + "Lower than 0,5")
}

var number = Math.random() * 100;
var age = Math.round(number)
if (age < 2) {
  console.log("ex04-if-else-B = " + "Baby")
} else if (age <= 12) {
  console.log("ex04-if-else-B = " +  "Kid")
} else if (age <= 19){
  console.log("ex04-if-else-B = " +  "Adolescent")
} else if (age <= 30) {
  console.log("ex04-if-else-B = " + "Young")
} else if (age <= 60){
  console.log("ex04-if-else-B = " + "Adult")
} else if (age <= 75) {
  console.log("ex04-if-else-B = " + "Elderly")
} else if (age <= 100){
  console.log("ex04-if-else-B = " + "Ancient")
}