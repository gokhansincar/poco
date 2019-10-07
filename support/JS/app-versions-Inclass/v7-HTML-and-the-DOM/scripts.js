
let todoList = {


  /* MY TODOS ARRAY
  --------------------------------------*/
  todos: [
    {
      textTodo: "First",
      completed: true
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
  displayTodos: function () {

    //Start Loop
    for (let i = 0; i < this.todos.length; i++) {

      let myItem = this.todos[i];
      let x = ' ';

      if (myItem.completed) {
        x = 'x';
      }
      let showItem = '(' + x + ') ' + myItem.textTodo;
      console.log("showItem: ", showItem);

    } // End loop

    console.log("-------------------------");

  },


  /* ADD TODO
  --------------------------------------*/
  addTodo: function (text) {
    //debugger;
    this.todos.textTodo.push(text);
    this.displayTodos();
  },


  /* CHANGE TODO
    --------------------------------------*/
  changeTodo: function (index, text) {
    this.todos[index].textTodo = text;
    this.displayTodos();
  },


  /* DELETE TODO
  --------------------------------------*/
  deleteTodo: function (index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },


  /* TOGGLE COMPLETED KEY VALUE OF AN ITEM
  --------------------------------------*/
  toggleCompleted: function(index) {
    let item = this.todos[index];
    item.completed = ! item.completed;

    this.displayTodos();
  },


  /* TOGGLE ALL ITEMS
  --------------------------------------*/
  toggleAll: function () {

		let totalTodos = this.todos.length;
		let completedTodos = 0;

		// Get the number of completed todos
		for (let i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		// If everything is true, make everything false.
		if (completedTodos === totalTodos) {
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		}

		// Otherwise make everthing true.
		else {
			for (let i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}

		this.displayTodos();

	} //End toggleAll() method


};


let displayTodosBtn = document.getElementById("displayTodosBtn");
let toggleAllBtn = document.getElementById("toggleAllBtn");
   
displayTodosBtn.addEventListener('click', function(event) {
  todoList.displayTodos();
});
toggleAllBtn.addEventListener('click', function() {
  todoList.toggleAll();
});

// document.addEventListener('keydown', function(e) {
//   console.log(e.code);
// });