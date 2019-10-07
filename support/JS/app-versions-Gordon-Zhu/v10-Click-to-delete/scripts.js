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
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},


	/* CHANGE TODO
	-----------------------------------*/
	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
	},


	/* DELETE TODO
	-----------------------------------*/
	deleteTodo: function (position) {
		this.todos.splice(position, 1);
	},


	/* TODO - Toggle Completed
	-----------------------------------*/
	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
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


	addTodo: function () {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},


	changeTodo: function () {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = '';
		view.displayTodos();
	},


	deleteTodo: function (position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},


	toggleCompleted: function () {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput = '';
		view.displayTodos();
	},


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


	displayTodos: function () {
		var todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');
			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todoUl.appendChild(todoLi);
		}
	},


	createDeleteButton: function () {

		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;

	},


	setUpEventListeners: function () {
		
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function (event) { //  Event Delegation Method
			
			//console.log(event.target.parentNode.id);
			var elementClicked = event.target;

			if(elementClicked.className = "deleteButton"){
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}

		});
	}


};
//#endregion



/** 
 * INIT / LOAD
 * ----------------------------------------------------
 * What to run when open the page ?
 */
view.setUpEventListeners();
view.displayTodos();
