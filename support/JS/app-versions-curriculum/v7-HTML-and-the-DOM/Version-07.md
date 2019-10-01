# APP VERSION 7 - HTML and the DOM
Add a HTML buttons and JS **Events** to interact with the DOM

## Requirements

- [ ] There should be a button “Display todos”
- [ ] There should be a button “Toggle all”
- [ ] Clicking “Display todos” button should run **todoList.displayTodos()**
- [ ] Clicking “Toggle All” button should run **todoList.toggleAll()**

<br>

## Create an HTML page (index.html) and a JS file (scripts.js)
This page will have:
- A title
- Two buttons
- A link to tour scripts file

```html
<!DOCTYPE html>
<html>

  <head>
    <title>Todos</title>
  </head>

  <body>
    <h1>Todo List</h1>
    <button id="displayTodoButton">Display Todos</button>
    <button id="toggleAllButton">Toggle All</button>
    <script src="script.js"></script>
  </body>

</html>
```

### Updated requirements
- [X] Must have a **toggleAll()** method to globally change the todos status
- [ ] **toggleAll()** : **If** everything’s true, make everything false
- [ ] **toggleAll()** : **Else** make everything true

<br>

## Count all todos with *completed: true*
Inside your toggleAll method:
- Get the total number of todos
- Create a variable *completedTodos* to store all *completed: true* todos
- Loop into todos and increment *completedTodos* value by 1 each time a todo completed property is true

```javascript
//code before...
toggleAll: function () {

  var totalTodos = this.todos.length;
  var completedTodos = 0;

  // Get the number of completed todos
  for (var i = 0; i < totalTodos; i++) {

    if (this.todos[i].completed === true) {
      completedTodos++; //increment current value by 1
    }

  }

},
//code after...
```

<br>

## TOGGLE *false* to *true* and vice-versa for all items
- **IF** all todos are completed, loop into todos and change *completed* property to **false**<br>
- **ELSE** mark all as **true**

```javascript
//code before...

var totalTodos = this.todos.length;
var completedTodos = 0;

// IF everything is true, make everything false.
if (completedTodos === totalTodos) {
  for (var i = 0; i < totalTodos; i++) {
    this.todos[i].completed = false;
  }
}

// ELSE make everthing true.
else {
  for (var i = 0; i < totalTodos; i++) {
    this.todos[i].completed = true;
  }
}

//code after...
```

#### The updated code inside toggleAll() method :
```javascript
//code before...
toggleAll: function () {

  var totalTodos = this.todos.length;
  var completedTodos = 0;

  // Get the number of completed todos
  for (var i = 0; i < totalTodos; i++) {
    if (this.todos[i].completed === true) {
      completedTodos++; //increment current value by 1
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

},
//code after...
```

### Updated requirements
- [X] Must have a **toggleAll()** method to globally change the todos status
- [X] **toggleAll()** : **If** everything’s true, make everything false
- [X] **toggleAll()** : **Else** make everything true

<br>

## Version 6 conclusions

In this version, we were "thinking in code". We created a **toggleAll()** method capable to change todos items status globally. As usual, the complete code version of this can be found in [version06.js](versions-js/version06.js)
