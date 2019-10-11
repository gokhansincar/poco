let todoList = ["item 1", "Item 2", "Item 3"];
//Call any array item with the index
//Index Start with 0
todoList[2]; //output: "Item 3"
todoList[1]; //output: "Item 2"
todoList[0]; //output: "Item 1"

//ADD an Array item (.push)
todoList.push("Item 4");
todoList.push("I'm an element of the array");

//DELETE an Array item (.splice)
todoList.splice(1,1); //start at index 1 and delete one item
todoList.splice(0,2); //start at index 0 and delete two items

//CHANGE an array item
todoList[1] = "SomeThing else"; //define the index and asign a new value