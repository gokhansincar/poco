/* TODO LIST OBJECT
------------------------------------------------*/
var todoList = {


	todos: [
		{
			todoText: "Item 1",
			completed: false
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


	//ADD TODO
	addTodo: function (todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},


	//CHANGE TODO
	changeTodo: function (position, todoText) {
		this.todos[position].todoText = todoText;
	},


	//DELETE TODO
	deleteTodo: function (position) {
		this.todos.splice(position, 1);
	},


	//TOGGLE COMPLETED TODO
	toggleCompleted: function (position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
	},


	//TOGGLE ALL
	toggleAll: function () {

		var totalTodos = this.todos.length;
		var completedTodos = 0;
		// Get the number of completed todos
		this.todos.forEach(function (todo) {
			if (todo.completed === true) {
				completedTodos++;
			}
		});
		this.todos.forEach(function (todo) {
			// If everything's true, make everything false.
			if (completedTodos === totalTodos) {
				todo.completed = false;
				// Otherwise, make everything true.
			} else {
				todo.completed = true;
			}
		});

	}


};


/* HANDLERS OBJECT
------------------------------------------------*/
var handlers = {


	/* ADD TODO
	----------------------------------------------*/
	addTodo: function () {

		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';

		view.displayTodos();

	},


	/* CHANGE TODO
	----------------------------------------------*/
	changeTodo: function () {

		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = "";
		changeTodoTextInput.value = '';

		view.displayTodos();

	},


	/* DELETE TODO
	----------------------------------------------*/
	deleteTodo: function (position) {

		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';

		view.displayTodos();

	},


	/* TOGGLE (ITEM) COMPLETED STATUS
	----------------------------------------------*/
	toggleCompleted: function () {

		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';

		view.displayTodos();

	},


	/* TOGGLE ALL TODOs COMPLETED STATUS
	----------------------------------------------*/
	toggleAll: function () {

		todoList.toggleAll();
		view.displayTodos();

	}


};


/* VIEW TODOs OBJECT
------------------------------------------------*/
var view = {

	//DISPLAY TODOs
	displayTodos: function () {

		var todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';


		//STOP HERE IF LIST IS EMPTY - Display a message
		if (todoList.todos.length === 0) {
			todoUl.innerHTML = '<li>Your todo list is empty</li>';
			return;
		}

		todoList.todos.forEach(function (todo, position) {

			var todoLi = document.createElement('li');
			var todoTextWithCompletion = (todo.completed === true) ? '(x)' : '( )';

			var itemContent = '';
			itemContent += '<span class="item-state">' + todoTextWithCompletion + '</span>';
			itemContent += '<span class="item-text">' + todo.todoText + '</span>';

			todoLi.id = 'item-' + position;
			todoLi.setAttribute('data-id', position);
			todoLi.innerHTML = itemContent;
			todoLi.appendChild(this.createDeleteButton(position));
			todoUl.appendChild(todoLi);

		}, this);

	},


	createDeleteButton: function (targetId) {

		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'x';
		deleteButton.setAttribute('class', 'deleteButton');
		deleteButton.setAttribute('data-id', targetId)

		return deleteButton;

	},


	setUpEventListeners: function () { //  Event Delegation Method

		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function (event) {

			// Get the element that was clicked on.
			var elementClicked = event.target;
			var targetId = parseInt(elementClicked.dataset.id); //console.log(targetId);

			// Check if elementClicked is a delete button.
			if (elementClicked.className === "deleteButton") {
				todoList.deleteTodo(targetId);
			}

			view.displayTodos();

		});

	}

};


/* INIT VIEW (when loading page)
------------------------------------------------*/
view.setUpEventListeners();
view.displayTodos();