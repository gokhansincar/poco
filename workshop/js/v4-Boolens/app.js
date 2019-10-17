//START OBJECT
let todos = {
  //MY TODO LIST - PROPERTY
  list : [
   {
    text : "Learn HTML5",
    completed: false
  },
  {
    text : "CSS",
    completed: false
  },
  {
    text : "JS",
    completed: false
  },
  {
    text : "PHP",
    completed: false
  },

  ],

 //DISPLAY TODOS - METHOD
  displayTodos: function() {
    console.log(this.list);
  },

  //ADD TODO
  addTodo : function(todoText) {
    let newTodo = {
      text: todoText,
      completed: false

    }
  this.list.push(newTodo);
  this.displayTodos();
},


//CHANGE TODO
changeTodo : function(index, newText) {
  this.list[index].text = newText;
  this.displayTodos();
},



//DELETE TODOS
deleteTodo: function(index) {
  this.list.splice(index, 1);
  this.displayTodos();
},

//TOGGLE COMPLETED
toggleTodo: function(index) {

  let currentStatus = this.list[index].completed; // true or false
  this.list[index].completed = ! currentStatus;
  this.displayTodos();
},


temp: function() {
  // console.log ("some string from a method!");
  },
  
}; // END OBJECT todos

function doThis() {
  return ("A text inside a global scope function");
}

//Everything after the RETURN is ignored;

todos.temp();

todos.toggleTodo(2);
todos.toggleTodo(2);
todos.addTodo("Learn Something else");
todos.addTodo("Learn Something else more");

console.log( todos.list[4] );
todos.list[4].text = "bla bla";
console.log( todos.list[4] );


// todos.deleteTodo(0);
