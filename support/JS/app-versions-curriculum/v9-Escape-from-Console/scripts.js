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


	/* ADD TODO
	-----------------------------------*/
	addTodo: function (todoText) {

		//Check if the input is not empty
		if(todoText === '') {
			alert("Must enter a text!");
			return false; // → STOPS THE FUNCTION HERE !
		}

		this.todos.push({
			todoText: todoText,
			completed: false
		});

	},


	/* CHANGE TODO
	-----------------------------------*/
	changeTodo: function (position, todoText) {

		//Check if the inputs are not empty. || operator => means "OR"
		if(!Number.isInteger(position) || todoText === '') {
			alert("When changing, you must enter an index and a text!");
			return false; // → STOPS THE FUNCTION HERE !
		}

		this.todos[position].todoText = todoText;

	},


	/* DELETE TODO
	-----------------------------------*/
	deleteTodo: function (position) {

		//Check if the input is not empty
		if(!Number.isInteger(position)) {
			alert("When deleting, you must enter an index!");
			return false; // → STOPS THE FUNCTION HERE !
		}

		this.todos.splice(position, 1);

	},


	/* TODO - Toggle Completed
	-----------------------------------*/
	toggleCompleted: function (position) {

		//Check if the input is not empty
		if(!Number.isInteger(position)) {
			alert("When deleting, you must enter an index!");
			return false; // → STOPS THE FUNCTION HERE !
		}

		let todo = this.todos[position]; // let → read it like "let completedTodos be 0"
		todo.completed = !todo.completed;

	},


	/* TODOs - Toggle All
	-----------------------------------*/
	toggleAll: function () {

		const totalTodos = this.todos.length; // → const is used when the value will NOT change
		let completedTodos = 0; // → read it "let completedTodos be 0"
		
		// Get the number of completed todos
		// Using "let": because we want the "i" variable to be AVAILABLE ONLY INSIDE the for loop block
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


	/* ADD TODO using the DOM
	-----------------------------------*/
	addTodo: function () {
		const addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';

		view.displayTodos();
	},


	/* CHANGE TODO using the DOM
	-----------------------------------*/
	changeTodo: function () {
		const changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		const changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = '';

		view.displayTodos();
	},


	/* DELETE TODO using the DOM
	-----------------------------------*/
	deleteTodo: function () {
		const deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';

		view.displayTodos();
	},


	/* Toggle Completed using the DOM
	-----------------------------------*/
	toggleCompleted: function () {
		const toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';

		view.displayTodos();
	},


	/* Toggle all using the DOM
	-----------------------------------*/
	toggleAll: function () {
		todoList.toggleAll();
		view.displayTodos();
	}


};
//#endregion


/** 
 * VIEW OBJECT - "specialized" in view of the list
 * ----------------------------------------------------
 * Methods for viewing the todo list
 */
//#region VIEW
var view = {


	/* DISPLAY TODOs
	-----------------------------------*/
	displayTodos: function () {

		//Get DOM UL ELEMENT
		const todoUl = document.querySelector('ul');
		
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
			let todoTextWithCompletion = x + todo.todoText;

			//4. Create li element
			let todoLi = document.createElement('li');

			//5. Put the text display inside li
			todoLi.textContent = todoTextWithCompletion; //use .innerHTML if using &nbsp;&nbsp; above

			//6. Append li to the ul list
			todoUl.appendChild(todoLi);

		} //End Loop

	} //End displayTodos() method


};
//#endregion


/** 
 * INIT / LOAD
 * ----------------------------------------------------
 * What to run when open the page ?
 */
view.displayTodos();
