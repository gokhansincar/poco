//START OBJECT todos
let todos = {

  //MY TODO LIST - PROPERTY
  list : [

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
      completed: true
    },
    {
      text: "Learn PHP",
      completed: true
    }

  ],

  //DISPLAY TODOS - METHOD
  displayTodos: function() {

    if(this.list.length == 0) {
      console.log("You don't have any todos, add some!");
    }

    this.list.forEach(function(item) {
      let completedStr = (item.completed) ? "(x)" : "( )";
      console.log(completedStr, item.text);
    });
    
  },

  //ADD TODO
  addTodo: function(todoText) {

    let newTodo = {
      text: todoText,
      completed: false
    }

    this.list.push(newTodo);
    this.displayTodos();
  },

  //CHANGE TODO
  changeTodo: function(index, newText) {
    this.list[index].text = newText;
    this.displayTodos();
  },

  //DELETE TODO
  deleteTodo: function(index) {
    this.list.splice(index, 1);
    this.displayTodos();
  },

  //TOGGLE COMPLETED
  toggleTodo: function(index) {
  
    let currentStatus = this.list[index].completed; //true or false
    this.list[index].completed = ! currentStatus;
    this.displayTodos();

  },

  //TOGGLE ALL !
  toggleAll: function() {

    //Completed items INIT
    let completedItems = 0;
    
    //How many todos I have ?
    let totalTodos = this.list.length; //console.log("Total todos:", totalTodos);

    //1. Check what items are completed (true)
    this.list.forEach(function(item) {
      if(item.completed == true) {
        completedItems++; //or... completedItems += 1;
      }
    });
    console.log("Completed items:", completedItems);

    //2. IF nothing is completed => check them all 
    // OR IF we have completed items => check them all
    //Version 1
    // if(completedItems == 0 || (completedItems > 0 && completedItems != totalTodos)) {
    //   console.log("Check them all !");
    // }
    // else {
    //   console.log("Uncheck them all !");
    // }

    //Version 2
    // if(completedItems >= 0 && completedItems != totalTodos) {
    //   console.log("Check them all !");
    // }
    // else {
    //   console.log("Uncheck them all !");
    // }

    //Version 3
    if(completedItems == totalTodos) {
      this.list.forEach(function(item) {
        item.completed = false;
      });
    }
    else {
      this.list.forEach(function(item) {
        item.completed = true;
      });
    }

    this.displayTodos();

  }


}; // END OBJECT todos


todos.displayTodos();
todos.toggleAll();


// 3 + (4 * 2) - 3; //8,
// (3 + 4) * 2 - 3; //11

