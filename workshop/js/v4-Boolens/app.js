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
  this.list.push(todoText);
  this.displayTodos();
},


//CHANGE TODO
changeTodo : function(index, text) {
  this.list[index] = text;
  this.displayTodos();
},



//DELETE TODOS
deleteTodo: function(index) {
  this.list.splice(index, 1);
  this.displayTodos();
},

temp: function() {
  console.log ("some string from a method!");
  },
  
}; // END OBJECT todos

function doThis() {
  return ("A text inside a global scope function");
}

//Everything after the RETURN is ignored;

todos.temp();

console.log(todos.list);
todos.addTodo("Learn Something else");
todos.changeTodo("1", "Something more");
todos.deleteTodo(0);
