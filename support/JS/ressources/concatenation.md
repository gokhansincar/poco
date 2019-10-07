# JAVASCRIPT - CONCATENATION


#### To concatenate strings with strings or strings with numbers we use the addition operator ( + )
* **Strings** :
	```js
	'Bob ' + 'is great!'
	//output: 'Bob is great'
	```

* **Strings and numbers** :
	```js
	'Sorin have ' + 2 + ' cats'
	//output: 'Sorin have 2 cats'
	```

* **Complex Strings on multiple lines** :
	```js
	//Write a html div with some paragraphs inside
	var html = '<div id="bob">' +
	'  <p>Some paragraph</p>' +
	'  <p>Some other paragraph</p>' +
	'  <p>Some other paragraph</p>' +
	'</div>';

	//For the same resulat, we can write it also like this :
	var html = '';
	html += '<div id="bob">';
	html += '  <p>Some paragraph</p>';
	html += '  <p>Some other paragraph</p>';
	html += '  <p>Some other paragraph</p>';
	html += '</div>';

	console.log(html);
	```