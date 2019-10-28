/* TODOS OBJECT
 * Specialty: manipulate the todos array
-----------------------------------------------*/
let todos = {

  //MY TODO LIST - PROPERTY
  list: [

    {
      text: "Learn HTML5",
      completed: true
    },
    {
      text: "Learn CSS",
      completed: true
    },
    {
      text: "Learn JS",
      completed: false
    },
    {
      text: "Learn PHP",
      completed: false
    }

  ],

  //ADD TODO
  addTodo: function (todoText) {

    let newTodo = {
      text: todoText,
      completed: false
    }

    this.list.push(newTodo);
    view.displayTodos();
  },

  //CHANGE TODO
  changeTodo: function (index, newText) {
    this.list[index].text = newText;
    view.displayTodos();
  },

  //DELETE TODO
  deleteTodo: function (index) {
    this.list.splice(index, 1);
    view.displayTodos();
  },

  //TOGGLE COMPLETED
  toggleTodo: function (index) {

    let currentStatus = this.list[index].completed; //true or false
    this.list[index].completed = !currentStatus;
    view.displayTodos();

  },

  //TOGGLE ALL !
  toggleAll: function () {

    //Completed items INIT
    let completedItems = 0;

    //How many todos I have ?
    let totalTodos = this.list.length; //console.log("Total todos:", totalTodos);

    //1. Check what items are completed (true)
    this.list.forEach(function (item) {
      if (item.completed) {
        completedItems++; //or... completedItems += 1;
      }
    });
    //console.log("Completed items:", completedItems);

    //IF everything is completed => uncheck them all 
    if (completedItems == totalTodos) {
      this.list.forEach(function (item) {
        item.completed = false;
      });
    }
    //ELSE check them all
    else {
      this.list.forEach(function (item) {
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
  isEmpty: function (input) {

    if (input.value === '') {
      message.show("The input ''" + input.id + "'' cannot be empty!");

      return true;
    }
    else {
      return false;
    }

  },

  //Handler for ADD todo
  addTodo: function () {
    const inputAdd = document.getElementById('inputAdd');

    if (!this.isEmpty(inputAdd)) {
      todos.addTodo(inputAdd.value);
      inputAdd.value = '';
    }


  },

  //Handler for CHANGE todo
  changeTodo: function () {
    const inputChangeIndex = document.getElementById('inputChangeIndex');
    const inputChangeText = document.getElementById('inputChangeText');

    if (!this.isEmpty(inputChangeIndex) && !this.isEmpty(inputChangeText)) {
      todos.changeTodo(inputChangeIndex.value, inputChangeText.value);
      inputChangeIndex.value = inputChangeText.value = '';
    }

  },

  //Handler for DELETE todo
  deleteTodo: function () {
    const inputDeleteIndex = document.getElementById('inputDeleteIndex');

    if (!this.isEmpty(inputDeleteIndex)) {
      todos.deleteTodo(inputDeleteIndex.value);
      inputDeleteIndex.value = '';
    }

  },

  //Handler for TOGGLE todo
  toggleTodo: function () {
    const inputToggleIndex = document.getElementById('inputToggleIndex');

    if (!this.isEmpty(inputToggleIndex)) {
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
  displayTodos: function () {

    const ul = document.querySelector("#todo-list");
    ul.innerHTML = '';

    if (todos.list.length === 0) {

      message.show("Your list is empty, please add something.", "info");

    }
    else {
      message.hide();
    }

    //LOOP INSIDE YOUR TODO LIST
    todos.list.forEach(function (item, index) {

      //1. Create LI element
      let li = document.createElement('li');

      //2. Put todo status and text inside LI 
      let completedStr = (item.completed) ? "(x)" : "(&nbsp;&nbsp;)";

      li.innerHTML = '<a href="#" id="' + index + '">' + completedStr + "&nbsp;&nbsp;" + item.text;

      //3. Create the delete button
      let deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'deleteButton');
      deleteBtn.setAttribute('id', index);
      deleteBtn.innerHTML = '&#x1F5D1;';

      //4. Append the Button to the LI
      li.appendChild(deleteBtn);

      //5. Append the LI to the UL
      ul.appendChild(li);

    });

  }

};


/* EVENTS OBJECT
 * Specialty: listen to events
-----------------------------------------------*/
let listen = {

  ulEvents: function () {

    const ul = document.querySelector("#todo-list");

    ul.addEventListener('click', function (event) {

      //Get the Event Target
      const elemClicked = event.target;
      // console.log("I just clicked the ", elemClicked.tagName);

      //IF clicked element is a BUTTON tag
      if (elemClicked.tagName === 'BUTTON') {
        //console.log(elemClicked.id);
        if (confirm("AreYou Sure? ")) {
          todos.deleteTodo(elemClicked.id);
        }
      }

      // IF clicked elemnt is a A tag
      if (elemClicked.tagName === 'A') {
        event.preventDefault();
        todos.toggleTodo(elemClicked.id);
      }

    });

  },
  //ADD TODO (big input) RELATED EVENTS
  addTodoEvents: function () {

    const addTodo = document.querySelector("#inputAddTodo");

    addTodo.addEventListener('keypress', function (event) {

      //console.log(event.key);

      //Detect ENTER key
      if (event.key === 'Enter' || event.which == 13 || event.keyCode == 13) {

        if (!handlers.isEmpty(addTodo)) {
          todos.addTodo(this.value); //in this context "this" is the DOM element ("#inputAddTodo") !
          this.value = '';
        }
        else {
          message.show("The Todo Text cannot be empty!");
        }

      }

    });

  } //END addTodoEvents

};

/* MESSAGE OBJECT
 * Specialty: listen to events
 * message.show(); or message.hide();
-----------------------------------------------*/

let message = {
  //DOM objects
  msgElem: document.querySelector("#msg"),
  msgElemIcon: document.querySelector("#msgIcon"),
  msgElemText: document.querySelector("#msgText"),

  //SHOW MESSAGE 
  show: function (msgStr, msgType = 'error') {

    this.msgElem.classList.remove('error', 'info');

    let typeClass = (msgType === 'error') ? 'error' : 'info';
    let typeIcon = (msgType === 'error') ? '&#9888;' : '&#9432;';

    this.msgElem.classList.add(typeClass);
    this.msgElemIcon.innerHTML = (msgType === 'error') ? '&#9888;' : '&#9432;';
    this.msgElemText.innerHTML = msgStr;

    this.msgElem.classList.remove('hidden');

  },

  //HIDE MESSAGE 

  hide: function () {
    this.msgElem.classList.add('hidden');

  }

}

listen.ulEvents();
view.displayTodos();
listen.addTodoEvents();


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


//WHAT POP-UP BOXES IN JS ?

//alert("Go Planet !");

//confirm("Are You Sure?");
// if(confirm("Are You Sure?")) {
//   alert("Yes you are!");
// }
// else {
//   alert("I knew it, you are scared!");
// }
//prompt("What's Your Name ?");