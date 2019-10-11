//MY TODO LIST
let todoList = [
  "Learn HTML5",
  "Learn CSS",
  "Learn JS",
  "Learn PHP"
];

//DISPLAY TODOS
function displayTodos(){
  console.log(todoList);
}

displayTodos();

//ADD TODO
function addTodo(todoText) {
  todoList.push(todoText);
  displayTodos();
}
addTodo("Do That!");
// addTodo("Do this!");
// addTodo("Do NOT do that!");

//CHANGE TODO
function changeTodo(index, newText) {
  todoList[index] = newText;
  displayTodos();
}

changeTodo(2 , "My Todo");
changeTodo(0 , "Something Like This");

//DELETE TODOS
function deleteTodo(index) {
  todoList.splice(index, 1);
  displayTodos();
}
deleteTodo(1);
deleteTodo(3);
