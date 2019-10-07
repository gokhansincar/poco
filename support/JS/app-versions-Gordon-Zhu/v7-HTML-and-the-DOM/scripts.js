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
			// Otherwise make everthing true.
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}


};


//DOM elements and JS Events
var displayTodoButton = document.getElementById('displayTodoButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodoButton.addEventListener('click', function () {
	todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function () {
	todoList.toggleAll();
});
