/**
 * TODO LIST OBJECT
 * Methods to manage the todo list
 * ----------------------------------------------------------
 */
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
    this.todos.push({
      textTodo: text,
      completed: false
    });

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


/**
 * HANDLERS OBJECT
 * Methods to handle the DOM EVENTS
 * ----------------------------------------------------------
 */
let handlers = {

  /* ADD INPUT
  --------------------------------------*/
  addTodo: function() {

    const addTodoInput = document.getElementById("addTodoInput");
    todoList.addTodo(addTodoInput.value);

  },


  /* CHANGE INPUT
  --------------------------------------*/
  changeTodo: function() {

    const changeTodoIndexInput = document.getElementById("changeTodoIndexInput");
    const changeTodoInput = document.getElementById("changeTodoInput");

    //console.log(parseInt(changeTodoIndexInput.value));

    //parseInt(changeTodoInput.value) //convert to a number
    todoList.changeTodo(
      changeTodoIndexInput.valueAsNumber, 
      changeTodoInput.value
    );

  },


  /* DELETE INPUT
  --------------------------------------*/
  deleteTodo: function() {

    const deleteTodoIndexInput = document.getElementById("deleteTodoIndexInput");

    todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);

  },


  /* TOGGLE INPUT
  --------------------------------------*/
  toggleCompleted: function() {

    const toggleTodoIndexInput = document.getElementById("toggleTodoIndexInput");

    todoList.toggleCompleted(toggleTodoIndexInput.valueAsNumber);

  }


};



