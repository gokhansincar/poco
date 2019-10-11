let todos = {
  list : [
    "Learn HTML5",
    "Learn CSS",
    "Learn JS",
    "Learn PHP"

  ],

 //DISPLAY TODOS
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
  
};

console.log(todos.list);
todos.addTodo("Learn Something else");
todos.changeTodo("1", "Something more");
todos.deleteTodo(0);



