# JAVASCRIPT - EXPRESSIONS AND OPERATORS

<br>


## ARITHMETIC OPERATORS:
1. **[Addition ( + )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_())**<br>
*The addition operator produces the sum of numeric operands or string concatenation*
	```js
	// Number + Number -> addition
	1 + 2 // 3

	// Boolean + Number -> addition
	true + 1 // 2

	// Boolean + Boolean -> addition
	false + false // 0

	// Number + String -> concatenation
	5 + 'foo' // "5foo"

	// String + Boolean -> concatenation
	'foo' + false // "foofalse"

	// String + String -> concatenation
	'foo' + 'bar' // "foobar"
	```
	
2. **[Subtraction ( - )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction_(-))**<br>
*The subtraction operator subtracts the two operands, producing their difference.*
	```js
	5 - 3 // 2
	3 - 5 // -2
	'foo' - 3 // NaN (Not a Number)
	```

3. **[Division ( / )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division_())**<br>
*The division operator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.*
	```js
	1 / 2      // returns 0.5 in JavaScript
	1 / 2      // returns 0 in Java 
	// (neither number is explicitly a floating point number)

	1.0 / 2.0  // returns 0.5 in both JavaScript and Java

	2.0 / 0    // returns Infinity in JavaScript
	2.0 / 0.0  // returns Infinity too
	2.0 / -0.0 // returns -Infinity in JavaScript
	```

4. **[Multiplication ( \ )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication_(*))**<br>
*The multiplication operator produces the product of the operands.*
	```js
	var n = 8 * 3; //n = 24
	```

5. **[Remainder: ( % )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())**<br>
*The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.*
	```js
	12 % 5 // 2
	1 % -2 // 1
	1 % 2 // 1
	2 % 3 // 2
	5.5 % 2 // 1.5
	-1 % 2 // -1
	```

6. [Exponentiation ( **\*\*** )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation_(**))<br>
<i>The exponentiation operator returns the result of raising first operand to the power second operand. Equivalent of the mathematical concept "raised to a power": <strong>2 <sup>3</sup> = 8</strong></i>
	```js
	2 ** 3 // 8
	3 ** 2 // 9
	3 ** 2.5 // 15.588457268119896
	10 ** -1 // 0.1

	2 ** 3 ** 2 // 512
	2 ** (3 ** 2) // 512
	(2 ** 3) ** 2 // 64
	```

7. [Increment ( ++ )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_())<br>
*The increment operator increments (adds one to) its operand and returns a value.*
	```js
	// Postfix 
	var x = 3;
	y = x++; // y = 3, x = 4

	// Prefix
	var a = 2;
	b = ++a; // a = 3, b = 3
	```

7. [Decrement ( -- )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--))<br>
*The decrement operator decrements (subtracts one from) its operand and returns a value.*
	```js
	// Postfix 
	var x = 3;
	y = x--; // y = 3, x = 2

	// Prefix
	var a = 2;
	b = --a; // a = 1, b = 1
	```

<br>

---

<br>

## ASSIGNMENT OPERATORS

| Name                      | Shorthand operator | Will translate to  | Result (when x = 3) |
|---------------------------|--------------------|--------------------|:-------------------:|
| Assignment                | x = 3              | x = 3              |                   3 |
| Addition assignment       | x += 3             | x = x + 3          |                   6 |
| Subtraction assignment    | x -= 3             | x = x - 3          |                   0 |
| Multiplication assignment | x *= 3             | x = x * 3          |                   9 |
| Division assignment       | x /= 3             | x = x / 3          |                   1 |
| Remainder assignment      | x %= 2             | x = x % 2          |                   1 |
| Exponentiation assignment | x **= 4            | x = x ** 4         |                  81 |

> *Note: To keep this table shorter we do not include the (rarely used) "bitwise" operators like :* 
> * `Left shift (<<=)`
> * `Right shift (>>=)`
> * `Unsigned right shift (>>>=)`
> * `Bitwise AND (&=)`
> * `Bitwise XOR (^=)`
> * `Bitwise OR (|=)`
