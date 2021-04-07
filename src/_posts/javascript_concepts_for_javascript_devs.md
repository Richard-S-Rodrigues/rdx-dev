---
title: "JavaScript Concepts for JavaScript Developers"
date: "2020-03-31"
tags: ["javascript"]
summary: "Some JavaScript concepts that every javaScript developer must know"
---

In this post we're going to learn some JavaScript concepts that are important for JavaScript developers.

The concepts that are going to be approach is:

1. Prototypes
2. Scope
3. Hoisting
4. Closures
5. IIFE(Immediately invoked Function Expression)
6. Callback functions

## Prototypes

Every object in JavaScript has an invisible property called **proto**, which is the prototype property of the constructor function.

```js
let numberOfDrinks = function () {
	this.coffe = 2;
	this.tea = 1;
};

let drinks = new numberOfDrinks(); //{coffe: 2, tea: 1}
console.log(drinks.constructor); // [Function: numberOfDrinks]
console.log(drinks.constructor.prototype); // numberOfDrinks {}
console.log(drinks.coffe.constructor.prototype); // [Number: 0]
```

> Notice that drinks.constructor.prototype === drinks.**proto** // true So, you notice that the constructor of the drinks variable is the function numberOfDrinks, which has a numberOfDrinks {} prototype.

Also, as you can see, drinks.coffee(the coffee prototype property that resides inside the drinks variable) has its own prototype called number.All the objects in JavaScript have an internal link to another object. This link is called prototype, which links to another prototype, over and over until the final prototype, the null value. This is called a prototype chain.

```js
let drink = function () {
	this.coffe = 2;
	this.tea = 1;
};

let getDrinks = new drink();
console.log(getDrinks.proto); // drink {}
console.log(getDrinks.proto.proto); // {}
console.log(getDrinks.proto.proto.proto); // null
```

---

## Scope

Scope is what is currently accessible in the local environment.Scope in a function is what was declared inside her.

```js
function user() {
	let name = "Richard";

	console.log(name); // Richard
}

user();

console.log(name); // ReferenceError: name is not defined
```

A variable that was not declared inside the function can be executed in the function if it is a parent element.

```js
let name = "Richard";
function user() {
	console.log(name); // Richard
}

user();
```

But if the variable was declared after the function, that will throw an error.

```js
function user() {
	console.log(name); // ReferenceError: name is not defined
}

user();
let name = "Richard";
```

---

## Hoisting

Hoisting is the mechanism that moves function declarations and variables to the top of their scope before executing the code.In that way, you are able to call a function before it's declared. Because she is hoisted at the top of the file before JavaScript executes the code.

```js
hello(); // hello world

function hello() {
	console.log("hello world");
}
```

For variables is a bit different. You can't get the value of the variable before it's assign.

```js

function hello() {

	console.log(hello ${name}) // ReferenceError: name is not defined

}

hello()

let name = 'world'

```

The reason being is that the variable is hoisted to the top, but the value assign to her is not. That's how JavaScript really interpreted the code:

```js

// The variable is hoisted to the top
let name = function hello() {

console.log(hello ${name})

}

hello()

// The value is not name = 'world'

```

For that reason, even if you can call a function before the declaration, the same is not true for a function expression(a function assigned to a variable)

```js
hello(); // ReferenceError: hello is not defined
let hello = function () {
	console.log("hello world");
};
```

---

## Closures

Before getting into Closures is important to understand two types of functions: outer function and inner function.

Outer function: A function that is parent - have another function inside her scope.
Inner function: A function that is child - is inside the scope of the outer function.

Closure means that a function is capable of remembering the values in her lexical scope.

```js
function sum() {
	let x = 2;

	return x + 5;
}

let x = 1;

console.log(sum()); // 7
```

So, even though we defined another variable x before calling the function, she still outputs the value of the variable x that was in her lexical scope.The same applies to inner and outer functions

```js
function outer() {
	let value = 10;

	function inner() {
		let value = 2;

		return value + 4;
	}
}

console.log(outer()); // 6
```

It returns 6 because inner was defined inside the scope of the outer function, getting her value.

---

## IIF

EIIFE(Immediately invoked Function Expression) is a JavaScript function that runs the exact moment is defined.In that way, you don't have to call the function later as someFunc().

```js

(function(){

	let value = 'world'
	console.log(hello ${value}) // hello world
})()

console.log(value) // ReferenceError: value is not defined

```

One of the reasons why this type of function is used is to obtain data privacy. All the variables declared within the IIFE function cannot be accessed outside the function.

---

## Callback functions

A callback function is a function that is assigned as a parameter to another function.She executes once the function executes.

```js
function hello(world) {
	console.log("hello");

	world();
}

function world() {
	console.log("world");
}

hello(world); // hello // world
```

In the example above, the function world is executed after the function hello. She is callback when the hello function is finished.Because of that, world is a callback function of hello.

---

##### That is a lot of important concepts that wasn't approached here. Like classes, Promises, Async/Await, etc. But, that would have made this post very expansive, so, i will make, later on, separate articles for them.
