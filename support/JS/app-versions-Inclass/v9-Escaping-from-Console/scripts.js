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


  /* ADD TODO
  --------------------------------------*/
  addTodo: function (text) {

    this.todos.push({
      textTodo: text,
      completed: false
    });

  },


  /* CHANGE TODO
    --------------------------------------*/
  changeTodo: function (index, text) {
    this.todos[index].textTodo = text;
  },
  


  /* DELETE TODO
  --------------------------------------*/
  deleteTodo: function (index) {
    this.todos.splice(index, 1);
  },


  /* TOGGLE COMPLETED KEY VALUE OF AN ITEM
  --------------------------------------*/
  toggleCompleted: function(index) {

    let item = this.todos[index];
    item.completed = ! item.completed;

  },


  /* TOGGLE ALL ITEMS
  --------------------------------------*/
  toggleAll: function () {

		const totalTodos = this.todos.length; //console.log(totalTodos);
		let completedTodos = 0;

		// Get the number of completed todos
		for (let i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
    //console.log('completedTodos: ' + completedTodos);
    
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
    
    //Display ToDo list
    view.displayTodos();


	} //End toggleAll() method


};


/**
 * HANDLERS OBJECT
 * Methods to handle the DOM EVENTS
 * ----------------------------------------------------------
 */
let handlers = {


  /* ADD TODO INPUT
  --------------------------------------*/
  addTodo: function() {

    const addTodoInput = document.getElementById("addTodoInput");
    todoList.addTodo(addTodoInput.value);

    addTodoInput.value = '';

    view.displayTodos();

  },


  /* CHANGE TODO INPUT
  --------------------------------------*/
  changeTodo: function() {

    const changeTodoIndexInput = document.getElementById("changeTodoIndexInput");
    const changeTodoInput = document.getElementById("changeTodoInput");

    todoList.changeTodo(
      changeTodoIndexInput.valueAsNumber, 
      changeTodoInput.value
    );

    changeTodoIndexInput.value = '';
    changeTodoInput.value = '';

    view.displayTodos();

  },


  /* DELETE TODO INPUT
  --------------------------------------*/
  deleteTodo: function() {

    const deleteTodoIndexInput = document.getElementById("deleteTodoIndexInput");

    todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);

    deleteTodoIndexInput.value = '';

    view.displayTodos();

  },


  /* TOGGLE TODO INPUT
  --------------------------------------*/
  toggleCompleted: function() {

    const toggleTodoIndexInput = document.getElementById("toggleTodoIndexInput");

    todoList.toggleCompleted(toggleTodoIndexInput.valueAsNumber);

    view.displayTodos();

  }


};


/**
 * VIEW OBJECT
 * Methods to VIEW THE DOM ELEMENTS
 * ----------------------------------------------------------
 */
let view = {


	/* DISPLAY TODOs
	-----------------------------------*/
	displayTodos: function () {


		//Get DOM ul
		const todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';


		//LOOP into todos
		for (let i = 0; i < todoList.todos.length; i++) {

			//1. Grab the todo object from the todos array
			let todo = todoList.todos[i];

			//2. Define completed string
			let x = '( ) '; //default value; you can use &nbsp;&nbsp; to put 2 spaces

			if (todo.completed === true) {
				x = '(x) ';
			}

			//3. Item text display
			let todoTextWithCompletion = i + '. ' + x + todo.textTodo;

			//4. Create li element
			let todoLi = document.createElement('li');

			//5. Put the text display inside li
			todoLi.textContent = todoTextWithCompletion; //use .innerHTML if using &nbsp;&nbsp; above

			//6. Append li to the ul list
			todoUl.appendChild(todoLi);

		} //End Loop


	} //End displayTodos() method


};


view.displayTodos();



