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
      completed: false
    },
    {
      text: "Learn PHP",
      completed: false
    }

  ],

  //DISPLAY TODOS - METHOD
  displayTodos: function() {

    this.list.forEach(function (item)  {
    let completedStr = (item.completed) ? "(X)" : "( )";
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

  }


}; // END OBJECT todos


todos.displayTodos();

// console.log( todos.list );

