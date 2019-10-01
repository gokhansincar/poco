# JAVASCRIPT - FUNCTIONS AND METHODS

<br>

## Native functions<br>
``` js
'some string'.toUpperCase(); // → SOME STRING
'Hello Bob!'.startsWith('He'); // → true
```

<br>

## Custom (or User) Functions
``` js
//Declare a custom function who calculates a person age
function personAge(name, birthYear) {

  var currentDate = new Date();
  var calculateAge = currentDate.getFullYear() - birthYear;
  
  return 'Hi ' + name + ', your age is ' + calculateAge;

}

//Call the function with parameters
console.log( personAge('Sorin', 1966) ); // → "Hi Sorin, your age is 53"
console.log( personAge() ); // → "Hi undefined, your age is NaN"



```

<br>

## Anonymous functions and Closures
``` js
//Associate with a var
var myVarFunction = function(num1, num2) {
  return num1 * num2;
}
myVarFunction(3,6); //18


//Associate with a event listener
document.getElementById("bob").addEventListener('click', function(e) {
  console.log(e.target); //displays the DOM element
});
```