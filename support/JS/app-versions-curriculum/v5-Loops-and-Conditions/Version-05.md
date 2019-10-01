# APP VERSION 5 - LOOPS & CONDITIONS
We are going to start working with Loops and Conditions.

## Requirements

- [ ] **displayTodos()** should show todoText
- [ ] **displayTodos()** should tell you if todos is empty
- [ ] **displayTodos()** should show completed

## LOOPS
Loops in are used to execute the same block of code a specified number of times or while a specified condition is true. Example:

```javascript
for ( let i = 0; i < 10; i++ ) {
  console.log("the value of i is: ", i);
}
foreach()
//Loop into todos array
for (let i = 0; i < todos.length; i++) {
  console.log("todo item: ", todos[i].todoText);
}
//todo item: "Item 1"
//todo item: "Item 2"
//etc.
```

## CONDITIONS
In computer science, conditional statements perform different computations depending on whether a boolean condition is true or false. Example:

```javascript
if ( true ) {
  //IF TRUE, run code inside this block
}
else {
  //IF NOT TRUE, run code inside this block
}

```


## Adding a loop and conditions to our code
Let's change our existing code in order to:
- check if the list is empty
- check if an item is completed or not
- display a string before textTodo depending on item status: **( )** *or* **(X)**


### Adding a condition depending on list items
``` javascript
//IF array is empty
if (this.todos.length === 0) {
  console.log('Your todo list is empty!');
}

//IF array is NOT empty, display items...
else {
  console.log('My Todos:', this.todos);
}
```

#### The condition inside displayTodo() method :
``` javascript [adding conditions]
var todoList = {

  //code before...

  displayTodo: function () {

    //IF array is empty
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    }

    //IF array is NOT empty, display items...
    else {
      console.log('My Todos:', this.todos);
    }

  },

  //code after...

};
```


### Adding a loop to GET each item detail
``` javascript
//A LOOP with todos items
for (var i = 0; i < this.todos.length; i++) {

  console.log(this.todos[i].todoText);

} //End LOOP
```

#### The loop inside displayTodo() method :
``` javascript [adding conditions]
var todoList = {

  //code before...

  displayTodo: function () {

    //IF ARRAY IS EMPTY
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } //end if
    
    //IF ARRAY HAVE ITEMS
    else {

      console.log('My Todos:');
      
      //START LOOP into array items
      for (var i = 0; i < this.todos.length; i++) {

        console.log(this.todos[i].todoText);

      } //End LOOP

    } //End else

  },

  //code after...

};
```

<br>

## The complete code of the displayTodo() method :

``` javascript [version 5 code]
var todoList = {

  //code before...

  displayTodo: function () {

    //IF ARRAY IS EMPTY
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    }
    
    //IF ARRAY HAVE ITEMS
    else {

      console.log('My Todos:');
      
      //START LOOP into array items
      for (var i = 0; i < this.todos.length; i++) {

        //Check if item completed status is TRUE
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        }

        //Check if item completed status is FALSE
        else {
          console.log('( )', this.todos[i].todoText);
        }

      } //End LOOP

    } //End else

  }, //End displayTodo() method

  //code after...

};
```

### Updated requirements

- [X] **displayTodos()** should show todoText
- [X] **displayTodos()** should tell you if todos is empty
- [X] **displayTodos()** should show completed

## Version 5 conclusions

In this version, we changed our app to use objects instead of arrays with the help of booleans. As usual, the complete code version of this can be found in [version05.js](versions-js/version05.js)
