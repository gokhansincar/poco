/** 
 * TODO LIST OBJECT - "specialized" in list management
 * ----------------------------------------------------
 * All methods related to list/array manipulation
 */
//#region TODO LIST
var todoList = {

	/* TODO ARRAY
	-----------------------------------*/
	todos: [
		{
			todoText: "Item 1",
			completed: true
		},
		{
			todoText: "Item 2",
			completed: false
		},
		{
			todoText: "Item 3",
			completed: false
		}
	],


	/* DISPLAY TODOs
	-----------------------------------*/
	displayTodos: function () {

		//IF todos ARRAY IS EMPTY
		if (this.todos.length === 0) {
			console.log('Your todo list is empty!');
		}
		
		//IF todos ARRAY HAVE ITEMS
		else {

			console.log('My Todos:');
			
			//Start Loop
			for (var i = 0; i < this.todos.length; i++) {

				//Grab the todo object from the todos array
				var todo = this.todos[i];

				//Define completed string
				var x = '( ) ';

				if (todo.completed === true) {
					x = '(x) ';
				}

				console.log(x, todo.todoText);

			} //End Loop

			//Just a separation between displays...
			console.log("-------------------------");

		} //END else

	},


	/* ADD TODO
	-----------------------------------*/
	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});

		this.displayTodos();
	},


	/* CHANGE TODO
	-----------------------------------*/
	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},


	/* DELETE TODO
	-----------------------------------*/
	deleteTodo: function (position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},


	/* TODO - Toggle Completed
	-----------------------------------*/
	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},


	/* TODOs - Toggle All
	-----------------------------------*/
	toggleAll: function () {

		var totalTodos = this.todos.length;
		var completedTodos = 0;
		
		// Get the number of completed todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		
		// If everything is true, make everything false.
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
			
		} 

		// Otherwise make everthing true.
		else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}

		this.displayTodos();

	}


};
//#endregion


/** 
 * HANDLERS OBJECT - "specialized" in DOM events
 * ----------------------------------------------------
 * Note that you could call displayTodos() and toggleAll() bellow directly with todoList object
 * But, in programming it's adviced to use "specialized" objects and methods for a more flexible application.
 * Here, the handlers object is "specialized" in DOM event-handlers
 */
//#region HANDLERS
var handlers = {
	

	/* DISPLAY TODOs using the DOM
	-----------------------------------*/
	displayTodos: function () {
		todoList.displayTodos();
	},


	/* ADD TODO using the DOM
	-----------------------------------*/
	addTodo: function () {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},


	/* CHANGE TODO using the DOM
	-----------------------------------*/
	changeTodo: function () {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = '';
	},


	/* DELETE TODO using the DOM
	-----------------------------------*/
	deleteTodo: function () {
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
	},


	/* Toggle Completed using the DOM
	-----------------------------------*/
	toggleCompleted: function () {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
	},


	/* Toggle all using the DOM
	-----------------------------------*/
	toggleAll: function () {
		todoList.toggleAll();
	},


};
//#endregion


/** 
 * INIT / LOAD
 * ----------------------------------------------------
 * What to run when open the page ?
 */
todoList.displayTodos();



   