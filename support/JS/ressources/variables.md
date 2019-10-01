# JAVASCRIPT - VARIABLES


## SYNTAX
```js
//Global scope variable
var myName = 'Arya';

//Local variable (read it like in math: "let myName be 'Arya'")
let myName = 'Arya';

//Read only variable (cannot change value)
const myName = 'Arya';
```
Let's take a look at the different components of this line of code.
1. **`var`** - Short for variable, is a JavaScript keyword that creates, or declares, a new variable. It can be a *global* or *local* variable depending on where is declared.

	**`let`** - The **let** statement declares a *block scope local variable*, optionally initializing it to a value.

	**`const`** - Constants are block-scoped, much like variables defined using the let statement. The *value of a constant cannot change through reassignment, and it can't be redeclared*.

2. **`myName`** is the *variable’s name*. Capitalizing in this way is a standard convention in JavaScript called camel casing.

3. **`=`** is the *assignment operator*. It assigns the value ('Arya') to the variable (myName).

4. **`Arya`** is the *value assigned* (=) to the variable myName. You can also say that the myName variable is initialized with a value of 'Arya'.

<br>

## RULES
* Variable names <span style="color: firebrick;">cannot start with numbers</span>.
* Variable names are *case sensitive*, so **myName** and **myname** would be different variables.
	It is bad practice to create two variables that have the same name using different cases
* Variable names cannot be the same as **[reserved keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)**.