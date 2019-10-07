
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

todoList.displayTodos();
todoList.toggleAll();
todoList.toggleAll();
todoList.toggleAll();


// i = i + 1; //i++
// i += 1; 
  //1.INIT   //2. COND //3. INCREMENTATION
// for( let i = 0; i < 10; i++ ) {
//   //debugger;
//   console.log("value of i: ", i); 
// }
// alert("DONE!");



//A terniary statement: same as condition above
//let x = (myItem.completed) ? 'x' : ' ';


// let weather = 'windy'; //rain, sun, windy

// if(weather == 'snow') {
//   console.log("Take my ski");
// }
// else if(weather == 'rain') {
//   console.log("Take my umbrella");
// }
// else if(weather == 'windy') {
//   console.log("Stay home!");
// }
// else {
//   console.log("Walk the dog");
// }





//MY TODOS
//let todos = ["First", "Second", "Third"];



// function displayTodos() {
//   console.log("THIS IS A FUNCTION ON THE GLOBAL SCOPE")
// }


//ADD todo
// function addTodo(text) {
//   todos.push(text);
//   displayTodos();
// }


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
// displayTodos(todos);
// addTodo("Fourth");
// addTodo("Fifth");
// changeTodo(3, "NEW TEXT !!!");
// deleteTodo(1);
