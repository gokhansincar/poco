/* TODOS OBJECT
 * Specialty: manipulate the todos array
-----------------------------------------------*/
let todos = {

  //MY TODO LIST - PROPERTY
  list : [

    // {
    //   text: "Learn HTML5",
    //   completed: true
    // },
    // {
    //   text: "Learn CSS",
    //   completed: true
    // },
    // {
    //   text: "Learn JS",
    //   completed: false
    // },
    // {
    //   text: "Learn PHP",
    //   completed: false
    // }

  ],

  //ADD TODO
  addTodo: function(todoText) {

    let newTodo = {
      text: todoText,
      completed: false
    }

    this.list.push(newTodo);
    view.displayTodos();
  },

  //CHANGE TODO
  changeTodo: function(index, newText) {
    this.list[index].text = newText;
    view.displayTodos();
  },

  //DELETE TODO
  deleteTodo: function(index) {
    this.list.splice(index, 1);
    view.displayTodos();
  },

  //TOGGLE COMPLETED
  toggleTodo: function(index) {
  
    let currentStatus = this.list[index].completed; //true or false
    this.list[index].completed = ! currentStatus;
    view.displayTodos();

  },

  //TOGGLE ALL !
  toggleAll: function() {

    //Completed items INIT
    let completedItems = 0;
    
    //How many todos I have ?
    let totalTodos = this.list.length; //console.log("Total todos:", totalTodos);

    //1. Check what items are completed (true)
    this.list.forEach(function(item) {
      if(item.completed) {
        completedItems++; //or... completedItems += 1;
      }
    });
    //console.log("Completed items:", completedItems);

    //IF everything is completed => uncheck them all 
    if(completedItems == totalTodos) {
      this.list.forEach(function(item) {
        item.completed = false;
      });
    }
    //ELSE check them all
    else {
      this.list.forEach(function(item) {
        item.completed = true;
      });
    }

    view.displayTodos();

  }

}; // END OBJECT todos


/* HANDLERS OBJECT
 * Specialty: communicate with HTML, grab
 * the input values and send them to todos obj.
-----------------------------------------------*/
let handlers = {

  //Check if an input is empty. Alert if so
  isEmpty: function(input) {

    const msgElem = document.querySelector("#msg");
    const msgElemText = document.querySelector("#msgText");

    if(input.value === '') {
      // alert("The input ''" + input.id + "'' cannot be empty!");
      msgElemText.innerHTML = "The input ''" + input.id + "'' cannot be empty!";
      msgElem.classList.remove('hidden');
      return true;
    }
    else {
      return false;
    }

  },

  //Handler for ADD todo
  addTodo: function() {
    const inputAdd = document.getElementById('inputAdd');

    if(! this.isEmpty(inputAdd)) {
      todos.addTodo(inputAdd.value);
      inputAdd.value = '';
    }


  },

  //Handler for CHANGE todo
  changeTodo: function() {
    const inputChangeIndex = document.getElementById('inputChangeIndex');
    const inputChangeText = document.getElementById('inputChangeText');

    if(! this.isEmpty(inputChangeIndex) && ! this.isEmpty(inputChangeText)) {
      todos.changeTodo(inputChangeIndex.value, inputChangeText.value);
      inputChangeIndex.value = inputChangeText.value = '';
    }

  },

  //Handler for DELETE todo
  deleteTodo: function() {
    const inputDeleteIndex = document.getElementById('inputDeleteIndex');

    if(! this.isEmpty(inputDeleteIndex)) {
      todos.deleteTodo(inputDeleteIndex.value);
      inputDeleteIndex.value = '';
    }

  },

  //Handler for TOGGLE todo
  toggleTodo: function() {
    const inputToggleIndex = document.getElementById('inputToggleIndex');

    if(! this.isEmpty(inputToggleIndex)) {
      todos.toggleTodo(inputToggleIndex.value);
      inputToggleIndex.value = '';
    }
  }

};


/* VIEW OBJECT
 * Specialty: create and display HTML
-----------------------------------------------*/
let view = {

  //DISPLAY TODOS - METHOD
  displayTodos: function() {

    const ul = document.querySelector("#todo-list");
    const msgElem = document.querySelector("#msg");
    const msgElemText = document.querySelector("#msgText");
    ul.innerHTML = '';

    if(todos.list.length === 0) {

      msgElemText.innerHTML = "Your list is empty, please add something.";
      
      // msgElem.setAttribute('class', '');
      // msgElem.removeAttribute('class');
      msgElem.classList.remove('hidden');

    }
    else {
      msgElem.classList.add('hidden');
    }


    //LOOP INSIDE YOUR TODO LIST
    todos.list.forEach(function(item) {

      let li = document.createElement('li');
      let completedStr = (item.completed) ? "(x)" : "( )";
      li.innerHTML = completedStr + "&nbsp;&nbsp;" + item.text;
      
      ul.appendChild(li);
      
    });
    
  }

};

view.displayTodos();


//CREATE AN HTML ELEMENT
// let div = document.createElement("div");
// div.innerHTML = 'Something';
// div.setAttribute('class', 'row');

// // document.body.insertBefore(div, null);
// document.body.appendChild(div);

//ADD AN LI TO MAY UL LIST
// let ul = document.getElementById("todo-list");
// let ul = document.querySelector('ul');

// let li = document.createElement("li");
// li.innerHTML = '(x) Learn HTML';
// ul.appendChild(li);