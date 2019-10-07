//Single Line Comment
/*
Multi
Line
Comment
 */

/**
 * DATA TYPES
 * All data types in JavaScripts
 * --------------------------------------
 * /
/* STRINGS
----------------------------------------------*/
"I'm Gokhan and glad to be"
'I am Gokhan and maybe glad to be'

"Wrong Strings'

'<h1 class="bob" id="dada">I\'m Bob</h1>'


/* NUMBERS
----------------------------------------------*/
//integer
3
34
56785675555555
0
1

//decimal or floot
34.3 

//negative numbers
-3
-0.01


/* BOOLEANS
----------------------------------------------*/
true //also 1 
false //also 0


/* NULL & UNDEFINED
----------------------------------------------*/
let bob = null;
let age = undefined;
let age;

/* OBJECTS
----------------------------------------------*/
//Array
["bob", "Marc", "James"]

//Function
function      myFunction  () {
  return 'Something' ;
}

//Object
{
  "Name" : "Gokhan",
  "Age" : "34",
  "Country" : "TR"
}



/**
 * VARIABLES
 * Variables are like boxes / containers
 * ---------------------------------------------
*/
//let => when content will/can change
let name = "Gokhan";
let age = 34;

let person = name + age;

//const => when content must not change
const days = ["Monday", "Tuesday", "etc."]; 

//var => the old way, a global variable;
var bob = 3;

//RULES & CONVENTIONS (of naming variables)
let bob = 3; //GOOD
let BOB = 3; //bad practice
let Bob = 3; //bad practice

let 0bob = 3; //WRONG, stars with numbers
let bob the great = 3; //WRONG, have spaces
let aimé = 3; //WRONG, have special characters

//JS is case sensitive language
let bob = 3;
let BOB = 2; //not the same as bob !

//Long Words and the Camel Case
let bob_the_great = 34; //could be like this
let bobthegreat = 34; //bad practice
let bobTheGreat = 34; // Good Practice, very used
