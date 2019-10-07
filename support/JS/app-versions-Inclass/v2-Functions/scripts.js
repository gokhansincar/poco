//MY TODOS
let todos = ["First", "Second", "Third"];

//DISPLAY todos
function displayTodos() {
  console.log(todos);
}

//ADD todo
function addTodo(text) {
  todos.push(text);
  displayTodos();
}

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
displayTodos();
addTodo("Fourth");
addTodo("Fifth");
changeTodo(3, "NEW TEXT !!!");
deleteTodo(1);

