//Single line Comment
/**
 * Multi line Comment
 * ------------------------------------
 */

/**
 * DATA TYPES
 * ------------------------------------
 */
//STRINGS
"A string";
"Another string";

"Wrong string';

"I'm a string also";

'<h1 class="bob">Title</h1>';


//NUMBERS
3;
3.5;
0;
0.01;

2 + 5;
2 * 5;
2 / 5;


//BOOLEANS
true; //also 1
false; //also 0


//NULL & UNDEFINED
let bob = null;
let bob;


//OBJECTS
//Array
[1,2,3,4];

//Object
{
  "Sorin": 1966,
  "Marc": 1985
}

//Function
function person(name, birthYear) {
  return name + ' is born in ' + birthYear;
}



//---------------------------------------------------------------//


/**
 * VARIABLES
 * ------------------------------------
 */
//Global scope variable
var myName = 'Sorin';

//Local (block) scope variable (read it like in math: "let myName be 'Sorin'")
let myName = 'Sorin';

//Read only, local (block) scope variable (cannot reassign values)
const myName = 'Sorin';


//RULES
// - Variable names cannot start with numbers.
// - Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases
// - Variable names cannot be the same as reserved keywords.


/**
 * HOW TO WRITE
 * ------------------------------------
 */
//Camel Case
let startWithLowerCaseAndAfterUseUpperCaseForEachStartOfANewWord;

//Underscore
let a_variable_with_underscore_separations;
