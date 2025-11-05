// Factorial

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(factorial(8));

// Escape Character
// \n means new line
// \t means new tab
console.log("I am a boy\nI live in Port Harcourt");

console.log("This is the first line\nAnd this is the second");

console.log(
  "I am going to become a top 1% JavaScript Developer in the World\nAnd I will speak at JSConference 2026"
);

console.log("I am JP\tLet see what yiu have got");

console.log('A newline character is written like "\\n".');

// Concatenation
let concatenate = "con" + "cat" + "e" + "nate";
console.log(concatenate);

// Back tick quote strings are also called Template Literals
// Template Literals
// The code below is a template literal since it is back tick quoted
let halfOfHundred = `half of 100 is ${100 / 2}`;
console.log(halfOfHundred);

// Unary Operators

console.log(typeof 4.5);
// The code above output the data type of 4.5 which happens to be a number

console.log(typeof "Amaka");
// The code above output the data type of "Amaka" which happens to be a string

// Operators that takes two values are known as BINARY OPERATOR
// Operators that takes a value is known as UNARY OPERATOR

// Boolean Data Type
// > and < are BINARY OPERATORS
console.log(4 > 3);
// True

console.log(4 < 2);
// False

// Strings can also be compared
console.log("Aardvark" < "Zoroaster");
// True

// In JS, uppercase letter are always less than lower case letter

console.log("Z" < "a");

// Not Equal to Operator
console.log("Garnet" != "Ruby");
// True

// Greater than or equal to Operator
console.log("Pearl" >= "Amethyst");
// False

// Less than or equal to Operator
console.log("Pearl" <= "Amethyst");
// True

// Equal to
console.log("Pearl" == "Amethyst");
// False

// NaN is the only JS value that is not equal to itself
console.log(NaN == NaN);
// False

// Date: 31-10-2025
// Logical Operators

// The && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true.

console.log(true && false);
// → false
console.log(true && true);
// → true

// The || operator denotes logical or. It produces true if either of the values given to it is true.

console.log(false || true);
// → true
console.log(false || false);
// → false

// Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false and !false gives
// true.

console.log(!true);
// ➡️ false

console.log(!false);
// ➡️ True

//  || has the lowest precedence, then comes &&, then the comparison operators (>, ==, and so on), and then the rest.

// Ternary Operator
// Ternary Operator operates on three values. It is written with a question mark and a colon, like this:

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

// Empty Values

// null and undefined, that are used to denote the absence of a meaningful value. They are themselves values, but they carry no information.

// Automatic Type Conversion

console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

// The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true
// We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values. Such values are created by typing in their name (true, null) or value (13, "abc").

// Expression and Statements

// A fragment of code that produces a value is called an expression.

// Bindings or Variable

let caught = 5 * 5;
console.log(caught);

let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let empty;
console.log(empty);
// This returns undefined because the variable wasn't given a value.

// Variable Naming Convention
// Binding names can be any sequence of one or more letters. Digits can be
// part of binding names—catch22 is a valid name, for example—but the
// name must not start with a digit. A binding name may include dollar signs
// ($) or underscores (_) but no other punctuation or special characters.

// Functions

// A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program.

// prompt("Enter your password");

let max = Math.max(2, 4);
console.log(max);
// → 4

let min = Math.min(2, 100) + 500;
console.log(min);

// Control Flow

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }

// let num = Number(prompt("Pick a number"));
// if (num < 10) {
//   console.log("Small");
// } else if (num < 100) {
//   console.log("Medium");
// } else {
//   console.log("Large");
// }

// While and Do Loops
// A statement starting with the keyword while creates a loop. The word
// while is followed by an expression in parentheses and then a statement,
// much like if. The loop keeps entering that statement as long as the
// expression produces a value that gives true when converted to Boolean.

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

// Tell ChatGPT to explain this code to you
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

// Do Loop
// A do loop is a control structure similar to a while loop. It differs only on
// one point: a do loop always executes its body at least once, and it starts
// testing whether it should stop only after that first execution.

// Tell ChatGPT to explain this step by step
// let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log("Hello " + yourName);

// For Loops

for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
// This code create a for loop; which start by declaring and initialising a variable followed by a condition that needs to be true then
// the variable will be increased by 2 only if the condition is true, the condition being that number (the declared variable) must be
// less than or equal to 12

// Exercise
// Generate a list of odd number between 1 to 20
for (let odd = 1; odd <= 20; odd += 2) {
  console.log(odd);
}

// Generating set of even number between 2 to 30
for (let even = 2; even <= 30; even += 2) {
  console.log(even);
}

for (let oddNo = 1; oddNo <= 30; oddNo += 2) {
  console.log(oddNo);
}

// Using for Loop for to get the result of 2 raised to the power of 10
// Tell ChatGPT to explain what this code does step by step
let resultExponent = 1;
for (let counter = 0; counter < 10; counter++) {
  resultExponent *= 2;
}
console.log(resultExponent);

// Breaking Out of a Loop
// Having the looping condition produce false is not the only way a loop can finish. The break statement has the effect of immediately jumping out of the enclosing loop.

// The code below; finds the first number that is both greater than or equal to 20 and divisible by 7:
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

// Using the remainder (%) operator is an easy way to test whether a number is divisible by another number. If it is, the remainder of their division is zero.

// The for construct in the example does not have a part that checks for the
// end of the loop. This means that the loop will never stop unless the break
// statement inside is executed.

// If you were to remove that break statement or you accidentally write an
// end condition that always produces true, your program would get stuck
// in an infinite loop. A program stuck in an infinite loop will never finish
// running, which is usually a bad thing.

// The continue keyword is similar to break in that it influences the
// progress of a loop. When continue is encountered in a loop body,
// control jumps out of the body and continues with the loop’s next iteration.

// Switch Operator

// switch (prompt("What is the weather like?")) {
//   case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//   case "sunny":
//     console.log("Dress lightly.");
//   case "cloudy":
//     console.log("Go outside.");
//     break;
//   default:
//     console.log("Unknown weather type!");
//     break;
// }

// Capitalization

// Binding names may not contain spaces, yet it is often helpful to use
// multiple words to clearly describe what the binding represents. These are
// pretty much your choices for writing a binding name with several words in
// it:

// Naming Convention in JS
// fuzzylittleturtle;
// fuzzy_little_turtle;
// FuzzyLittleTurtle;
// fuzzyLittleTurtle;

// Comments

// A comment is a piece of text that is part of a program but is completely
// ignored by the computer. JavaScript has two ways of writing comments. To
// write a single-line comment, you can use two slash characters (//) and
// then the comment text after it:

// Quote
/*
“People think that computer science is the art of geniuses but the actual reality is the opposite,
just many people doing things that build on each other, like a wall of mini stones.”
—Donald Knuth
*/

// Functions

/*

Functions are one of the most central tools in JavaScript programming. The
concept of wrapping a piece of program in a value has many uses. It gives
us a way to structure larger programs, to reduce repetition, to associate
names with subprograms, and to isolate these subprograms from each other.

*/

// Defining a Function

/*
A function definition is a regular binding where the value of the binding is a
function.
*/

// For example, this code defines cube to refer to a function that produces the cube of a given number:

function cube(x) {
  return x * x * x;
}

console.log(cube(3));

/*
A function is created with an expression that starts with the keyword
function. Functions have a set of parameters (in this case, only x) and
a body, which contains the statements that are to be executed when the
function is called. The body of a function created this way must always be
wrapped in braces, even when it consists of only a single statement.
*/

// Note: A return keyword without an expression after it will cause the function to return undefined.

/*

Parameters to a function behave like regular bindings, but their initial
values are given by the caller of the function, not the code in the function
itself.

*/

// Stopped at 59/564

// Bindings and Scopes

// Variables or bindings that are defined outside of any function, block, or module, the scope is the whole program—you can refer to
// such bindings wherever you want. These are called global.

// Variables or bindings created for function parameters or declared inside a function can
// be referenced only in that function, so they are known as local bindings.

// Bindings declared with let and const are in fact local to the block in
// which they are declared, so if you create one of those inside of a loop, the
// code before and after the loop cannot “see” it.

let x = 10; // global
if (true) {
  let y = 20; // local to block
  var z = 30; // also global
}

//  For example, when the code inside the halve function refers to n, it is seeing its own n, not the global n.

const halve = function (n) {
  return n / 2;
};
let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

// Nested Scope

/*

The set of bindings visible inside a block is determined by the place of that
block in the program text. Each local scope can also see all the local scopes
that contain it, and all scopes can see the global scope. This approach to
binding visibility is called lexical scoping.


*/

// Functions as Values

/*
A function binding usually simply acts as a name for a specific piece of the
program. Such a binding is defined once and never changed. This makes it
easy to confuse the function and its name.
*/

let safeMode = true;
let launchMissiles = function () {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function () {
    /* do nothing */
  };
}

// Delcaration Notation

// There is a slightly shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently:

function square(x) {
return x * x;
}

console.log(square(23));



/*
The preceding code works, even though the function is defined below the
code that uses it. Function declarations are not part of the regular top-tobottom flow of control. They are conceptually moved to the top of their
scope and can be used by all the code in that scope.
*/
console.log("The future says:", future());
function future() {
return "You'll never have flying cars";
}

// Arrow Functions

const roundToOne = (n_One, stepOne) => {
let remainderOne = n_One % stepOne;
return n_One - remainderOne + (remainderOne < stepOne / 2 ? 0 : stepOne);
};

console.log(roundToOne(45, 2));


// When an arrow function has no parameter

const horn = () => {
console.log("Toot");
};
horn();





// Call Stack
function greet(who) {
console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");



//Optional Arguments
// The following code is allowed and executes without any problem:

function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));

// In the code above x is referred to as the parameter and 4 is referred to as the arguments and since the function has only one
// parameter then it going to work only for the first argument

// Note: JavaScript is extremely broad-minded about the number of arguments you can pass to a function. If you pass too many, the extra ones are ignored. If
// you pass too few, the missing parameters are assigned the value
// undefined.

function minus(a, b) {
if (b === undefined) return -a;
else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5



function roundTo(n, step = 1) {
let remainder = n % step;
return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(4.5));
// → 5
console.log(roundTo(4.5, 2));
// → 4

remainder = 0;
n = 4.5;
step = 0;


// Closure: A function that references bindings from local scopes around it

function wrapValue(n) {
let local = n;
return () => local;
}


let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2


function multiplier(factor) {
return number => number * factor;
}
let twice = multiplier(2);

console.log(twice(5));


/*
Note: Thinking about programs like this takes some practice. A good mental
model is to think of function values as containing both the code in their
body and the environment in which they are created. When called, the
function body sees the environment in which it was created, not the
environment in which it is called. 
*/

// Recursion

// A function that calls itself is called recursive.

// Recursion allows some functions to be written in a different style.

function power(base, exponent) {
if (exponent == 0) {
return 1;
} else {
return base * power(base, exponent - 1);
}
}

console.log(power(2, 3));
// → 8

// Stopped at Recursion


