//MY TODOS
//let todos = ["First", "Second", "Third"];


let todoList = {


  /* MY TODOS ARRAY
  --------------------------------------*/
  todos: [
    {
      textTodo: "First",
      completed: false
    }, 
    {
      textTodo: "Second",
      completed: false
    }, 
    {
      textTodo: "Third",
      completed: false
    },
    {
      textTodo: "Forth",
      completed: true
    }
  ],


  /* DISPLAY TODOS
  --------------------------------------*/
  displayTodos: function() {
    console.log(this.todos);
  },


  /* ADD TODO
  --------------------------------------*/
  addTodo: function(text) {
    debugger;
    this.todos.push(text);
    this.displayTodos();
  },


  /* CHANGE TODO
  --------------------------------------*/
  changeTodo: function(index, text) {
    this.todos[index] = text;
    this.displayTodos();
  },


  /* DELETE TODO
  --------------------------------------*/
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  }

   
};

//todoList.displayTodos();
//todoList.addTodo("SOME TEXT");

let myItem = todoList.todos[3];
let showItem = '(' + myItem.completed + ') ' + myItem.textTodo;
console.log(showItem);


// function displayTodos() {
//   console.log("THIS IS A FUNCTION ON THE GLOBAL SCOPE")
// }


//ADD todo
// function addTodo(text) {
//   todos.push(text);
//   displayTodos();
// }


//CHANGE todo
function changeTodo(index, text) {
  todos[index] = text;
  displayTodos();
}

//DELETE To DO
function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}

//CALLING STUFF
// displayTodos(todos);
// addTodo("Fourth");
// addTodo("Fifth");
// changeTodo(3, "NEW TEXT !!!");
// deleteTodo(1);
