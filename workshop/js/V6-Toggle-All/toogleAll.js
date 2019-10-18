//Condition: what to do depending on the weather
// let weather = "snowing"; //sunny, rainy, cloudy, snowing

// if(weather == "sunny") {
//   console.log("Take your sun glasses");
// }
// else if(weather == "rainy") {
//   console.log("Take your umbrella");
// }
// else if(weather == "cloudy") {
//   console.log("Take your jacket");
// }
// else if(weather == "snowing") {
//   console.log("Take your sledge");
// }
// else {
//   console.log("Not clear what I have to do...");
// }

//AGE CONDITIONS
function calculateAge(birthYear) {

  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear; //2019
  let msg = "";

  if(age < 6) {
    msg = "Drink you milk !";
  }
  else if(age >= 6 && age < 18) {
    msg = "Go to sleep, you have school tomorrow.";
  }
  else if(age >= 18 && age < 40) {
    msg = "Work hard, you can do it !";
  }
  else if(age >= 40 && age <= 65) {
    msg = "You won 1 million dollars !";
  }
  else if(age > 65) {
    msg = "Don't forget to take your pills !";
  }
  else {
    msg = "Let's Party !";
  }

  return "You have " + age + ": " + msg; //You have 53: Let's party !

}

// console.log( calculateAge(1966) ); //53
// console.log( calculateAge(2000) ); //19
// console.log( calculateAge(2016) ); //3
// console.log( calculateAge(2008) ); //11

//OR COMPARISON OPERATOR
// let weather = "rainy";
// if(weather == "rainy" || weather == "cloudy") {
//     console.log("Take your jacket");
// }

//COMPARAISON OPERATORS
/*
==  //=> equality
||  //OR
&&  //AND
>
>=
<
<=
*/


// LOOPS -----------------------------------
// let num = 100;

//FOR LOOP
// for(let i = 1; i <= num; i++) {
//   console.log(i);
// }

// AN ARRAY
let names = ["Jack", "Bob", "Julia", "Margaret", "John", "Mélanie"];
// console.log( names.length );

// FOR LOOP with array length
// for(let i = 0; i < names.length; i++) {
//   console.log( names[i] );
// }

// FOREACH LOOP - with a anonymus function
// names.forEach(function(item, index) {
//   console.log(index, item);
// });


// FOREACH LOOP - with a custom function
// function iterateNames(item) {
//   console.log(item);
// }

// Call the custom function on each loop
// names.forEach(iterateNames);

//EXERCISE : LOOP INSIDE AN ARRAY CONTAINING OBJECTS
let myTodos = [
  {
    text: "Item 1",
    completed: false
  },
  {
    text: "Item 2",
    completed: true
  },
  {
    text: "Item 3",
    completed: true
  },
  {
    text: "Item 4",
    completed: false
  }
];

//USE "FOR" TO DISPLAY THE TODOS TEXTS
// for(let i = 0; i < myTodos.length; i++) {
//   console.log( myTodos[i].text );
// }

//USE "FOREACH" TO DISPLAY THE TODOS TEXTS
myTodos.forEach(function(item) {

  //Classic approach
//   let completedStr = " ";

//   if(item.completed) {
//     completedStr = "(X)";
//   }

//   else {
//     completedStr = "( )";
//  } 



  //Ternary Operator approach
  let completedStr = (item.completed) ? "(X)" : "( )";


  console.log(completedStr, item.text);

});
