//GLOBAL SCOPE

//VARIABLES
let aString = "This is a string";
let aNumber = 45; //23.2, -3, 0
let aBoolean = true; //false
let anArray = [];
let anObject = {};
let aFunction = function() {

};


//ARRAYS
let myArray = [
  "String", 
  567, 
  [1,2,3], 
  {}
];
myArray[1]; //1 is the index
myArray.push("dada");
myArray.length; //size of the array

//FUNCTIONS
function addTodo() {
  //whatever code...
  //LOCAL SCOPE
  let bob = 3;
}

let addTodoOther = function() {
  //whatever code...
  //LOCAL SCOPE
  addTodo();

  //console.log(bob);
}
addTodo();
addTodoOther();

//Display name
function nameChandler() {
  console.log("Chandler");
}
//nameChandler();

function nameMark() {
  console.log("Mark");
}
//nameMark();


function name(theName, theAge) {
  console.log("name function: ", theName, "=>", theAge);
}
// name("Mark", 34);
// name("Chandler", 67);
// name("Mary", 22);


//OBJECTS
let car = {

  make: "",
  model: "",
  color: "",

  moreInfo: function(myArg) {
    return car.color;
  }

};

console.log(car.make, car.color);



