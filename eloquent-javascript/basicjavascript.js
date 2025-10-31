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

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

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
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName);


// For Loops

