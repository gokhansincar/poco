
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


// let n = 1;
// let bool = false; console.log("bool: ", bool);

//==        => test for equality
//===       => test for equality AND data type

//3 == '3'  //=> true
//3 === '3' //=> false

//let compare = (n == bool);
//console.log(compare);

//todoList.displayTodos();
//todoList.addTodo("SOME TEXT");

let myItem = todoList.todos[2];

let x = ' ';

if(myItem.completed) {
  x = 'x';
}

let x = (myItem.completed) ? 'x' : ' ';

let showItem = '(' + x + ') ' + myItem.textTodo;
console.log(showItem);

let weather = 'windy'; //rain, sun, windy

if(weather == 'snow') {
  console.log("Take my ski");
}
else if(weather == 'rain') {
  console.log("Take my umbrella");
}
else if(weather == 'windy') {
  console.log("Stay home!");
}
else {
  console.log("Walk the dog");
}





//MY TODOS
//let todos = ["First", "Second", "Third"];



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
