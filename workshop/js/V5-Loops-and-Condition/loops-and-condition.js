//Condition: what to do depending on the weather
// let weather = "snowing"; //sunny, rainy, cloudy, snowing 

// if(weather == "sunny") {
// console.log("Take Nothing :) ");
// }
// else if(weather == "rainy") {
//   console.log("Go to pool");
//   }
//   else if(weather == "cloudy") {
//     console.log("Dance outside");
//     }
//     else if(weather == "snowing") {
//       console.log("Ride the car");
//       }
// else {
//   console.log("Don't know yet we should see :)");
// }

//AGE CONDITIONS
function calculateAge(birthYear){
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
let msg = "";

if(age < 7){
  msg = "Drink your Milk !"
}
else if(age >=7 && age < 18){
  msg = "Go To Sleep, you have school tomorrow.";
}
else if( age >= 18 && age< 40){
  msg = "Listen to Rihanna: Work Work Work :)"
  }
  
else if( age > 39 && age < 66){
msg = "You won 1 million Dollars."
}

else if(age >= 65) {
  msg = "Take your pills! ";
}

else {
  msg = "Let's Party!";
}

return "You have " +age + ": " +msg; //You have 34:Let's Party !
}

console.log ( calculateAge(1985) );
console.log ( calculateAge(1966) );
console.log ( calculateAge(2012) );
console.log ( calculateAge(2017) );

//OR COMPARAISON OPERATOR
if(weather == "rainy" || weather == "cloudy"){
  msg = "take your brain :)"
}



// COMPARAISON OPERATORS
// == //=> equality
// === //=> strick equality
// || //OR
// && //AND 