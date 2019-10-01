# JAVASCRIPT - BUILT IN OBJECTS
Useful JavaScript built-in objects

<br>

## Math()
Examples with **Math** object

* **Math.random()**<br>
	*Returns a random number between 0 and 1. Example :*

  ```js
  Math.random() * 50;
  ```

* **Math.floor()**<br>
	*Takes a decimal number, and rounds down to the nearest whole number. Example :*

	```js
  Math.floor(Math.random() * 50);
  ```
	
* **Math.ceil()**<br>
  *Round UP to closer integer*

	```js
  Math.ceil(43.8); //44
  ```

* **Math.floor()**<br>
  *Round DOWN to closer integer*

	```js
  Math.floor(43.8); //43
  ```


<br>


## Number()
Examples with **Number** object

* **Number.isInteger()**<br>
  *Check if number is integer (no decimals)*

	```js
  Number.isInteger(2017) //true

  Number.isInteger(43.2) //false
  ```