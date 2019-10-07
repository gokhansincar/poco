# JAVASCRIPT - FUNCTIONS (or METHODS if part of a Class)

<br>

## Native functions<br>
``` js
'some string'.toUpperCase(); // → SOME STRING
'Hello Bob!'.startsWith('He'); // → true
```

<br>

## Custom (or User) Functions
``` js
//Declare a custom function who calculates a person age :
function personAge(name, birthYear) {

  let currentDate = new Date();
  let calculateAge = currentDate.getFullYear() - birthYear;
  
  return 'Hi ' + name + ', your age is ' + calculateAge;

}

//Call the function with parameters :
console.log( personAge('Sorin', 1966) ); // → "Hi Sorin, your age is 53"
console.log( personAge() ); // → "Hi undefined, your age is NaN"



```

<br>

## Anonymous functions and Closures
``` js
//Associate with a variable :
let myVarFunction = function(num1, num2) {
  return num1 * num2;
}
myVarFunction(3,6); //18


//ES6 arrow function variante :
let myShorterVarFunction = (num1, num2) => num1 * num2;
myShorterVarFunction(2,5); //10


//Associate with a event listener :
document.getElementById("bob").addEventListener('click', function(e) {
  console.log(e.target); //displays the DOM element
});
```