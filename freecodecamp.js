// Bracket Notations and Accessing Characters from a string

let greeting = "hello";
console.log(greeting[1]); // "e"
console.log(greeting[4]); // "e"



// To get the last character of a string, it always a best practice to use length
let name = "John";
console.log(name[name.length - 1]);



// Getting Multiple Characters

let operator = "Addition";
let firstThreeLetterOfOperator = operator[0] + operator[1] + operator[2];
console.log(firstThreeLetterOfOperator)


// Creating NewLines in JavaScript
// In many programming languages, including JavaScript, you can create 
// a newline in a string using a special character called an escape sequence. The most common escape sequence for newlines is \n.


let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);


// Escaping Inner Quotes

let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"


// Template Literals and String Interpolation

name = "Johnpaul";
greeting = `Hello, ${name}!`;

console.log(greeting);


// Using String Concatenation and + operator
name = "Chinedu";
age = 25;
message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);

// Using Template Literals and String Interpolation

name = "Mubarak";
age = 25;
message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Template Literals supports Multiline string

poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem);


// Finding the position of a substring in a string

// A substring is a sequence of characters that appears within a larger string. For example, in the string hello world, hello and world are substrings.

// To locate the position of a substring inside of a string, you can use the indexOf() method.
// The indexOf() method in JavaScript allows you to search for a substring within a string.

// If the substring is found, indexOf() returns the index (or position) of the first occurrence of that substring. 
// If the substring is not found, indexOf() returns -1, which indicates that the search was unsuccessful.


// Substring is found here
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14

// the word awesome starts at index 14 in the string JavaScript is awesome!, so the indexOf() method returns 14


// Exercises using indexOf

let phrase = "I am going to be a top 1% software Engineer in the world";
let phrasePosition = phrase.indexOf("going");
console.log(phrasePosition);

let love_letter = "I love love";
let loveletter_position = love_letter.indexOf("ove");
console.log(loveletter_position);


// Substring is not found here

phrase = "I am going to be a top 1% software Engineer in the world";
phrasePosition = phrase.indexOf("believe");
console.log(phrasePosition);
// This return -1 because substring could not be found.


// You can also specify where to begin searching within the string by providing a second argument to indexOf()

sentence = "JavaScript is awesome, and JavaScript is powerful!";
position = sentence.indexOf("JavaScript", 10);
console.log(position); // 27

// Exercise

love_letter = "I love love";
loveletter_position = love_letter.indexOf("love", 5);
console.log(loveletter_position);


// Short way of finding substring in a string and printing it in the console
// This returns 1 because it cant be found
console.log("freeCodeCamp".indexOf("F")) // -1


// The Prompt() Method and How it Works

// prompt(message, default);
// prompt("What is your name?", "Guest");


// Brief history about ASCII
// ASCII, short for American Standard Code for Information Interchange, 
// is a character encoding standard used in computers to represent text. It assigns a numeric value to each character, which is universally recognized by machines.

// ASCII is a system for encoding characters such as letters, digits, and symbols into numerical values.

// The ASCII standard covers 128 characters including:

// Uppercase and lowercase English letters (A-Z, a-z).
// Numbers (0-9).
// Common punctuation marks and symbols (!, @, #, and so on).
// Control characters (such as newline and tab).


// In JavaScript, you can easily access the ASCII code of a character using the charCodeAt() method. 
// This method is called on a string and returns the ASCII code of the character at a specified index.

let letter = "A";
console.log(letter.charCodeAt());  // 65


letter = "J";
console.log(letter.charCodeAt());

// While charCodeAt() helps you retrieve the ASCII value of a character, the fromCharCode() method allows you to do the opposite: 
// convert an ASCII code into its corresponding character.

let char = String.fromCharCode(65);
console.log(char);  //  A

char = String.fromCharCode(78);
console.log(char);


char = String.fromCharCode(53);
console.log(char);


char = String.fromCharCode(88);
console.log(char);

console.log(String.fromCharCode(66));

