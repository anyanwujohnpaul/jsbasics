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

let my_name = "Johnpaul";
let greetingText = `Hello, ${my_name}!`;

console.log(greeting);


// Using String Concatenation and + operator
let hisName = "Chinedu";
let hisAge = 25;
let simple_message = "My name is " + hisName + " and I am " + hisAge + " years old.";
console.log(simple_message);

// Using Template Literals and String Interpolation

let friend_name = "Mubarak";
let friend_age = 25;
let friend_message = `My name is ${friend_name} and I am ${friend_age} years old.`;
console.log(friend_message);



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

let loveLetter = "I love love";
let loveTextPosition = loveLetter.indexOf("ove");
console.log(loveTextPosition);


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

let love_text = "I love love";
let love_text_position = love_text.indexOf("love", 5);
console.log(love_text_position);


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



// Date: 30-10-2025
// Working with Strings and Slice Operator

// Testing if a string contains a substring

// The includes() method is used to check if a string contains a specific substring. 
// If the substring is found within the string, the method returns true otherwise, it returns false.


// Format for using the includes() method
// string.includes(searchValue);

// Note: The searchValue represents the substring you're checking for in the main string

// Example of using the includes() method

let phrase_text = "JavaScript is awesome!";
let phrase_result = phrase_text.includes("awesome");

console.log(phrase_result);  // true

// Note: The includes() method is case sensitive



// Exercises for myself on includes() and slice() method

// Check if the code below contains the word "fun"

let expression = "Learning JavaScript is fun";

let resultOne = expression.includes("fun");
console.log(resultOne);


// Case sensitivity check 
let resultTwo = expression.includes("Fun");
console.log(resultTwo);


// includes() - Email Domain checker; Check if the string contains "@" and ".com"

let email = "user@example.com";

let emailResultOne = email.includes("@");
console.log(emailResultOne)

let emailResultTwo = email.includes(".com");
console.log(emailResultTwo);


// includes() - We want to check if a given word exists inside text — but the check must be case-insensitive.

function containsWord(text, word) {

  // return true or false
  let upperCaseText = text.toUpperCase();
  let upperCaseWord = word.toUpperCase();

  let containsWordResult = upperCaseText.includes(upperCaseWord);

  console.log(containsWordResult);
}

containsWord("Everyday", "day");

// includes() - Check if "Chika" is included inside the string using .includes().

const names = "Ada, Ben, Chika, David";

let names_result = names.includes("Chika");

console.log(names_result);


// incudes() and slice() Check if "password" appears — if yes, slice out only "swordfish" and log it.
let secret = "The password is: swordfish";

let passwordAppears = secret.includes("password");

if (passwordAppears) {
  let sliceSwordfish = secret.slice(17);
  console.log(sliceSwordfish);
}

// Slicing - Find username from email
let email_text = "developer@techhub.io";

let email_result = email_text.slice(0, 9);
console.log(email_result);

// Remove first word
// Use .slice() to remove "Hello " and just return "World, Welcome".
const msg = "Hello World, Welcome";

let slice_result = msg.slice(5);
console.log(slice_result);


// Conditional Greeting
// If it includes "guest", log "Welcome Guest!"
// Else log "Welcome Back!"

let user = "guest_user";

let user_result = user.includes("guest");

if (user_result) {
    console.log("Welcome Guest");
} else {
  console.log("Welcome Back!");
}

// Extract Domain Extension
// Slice the last 3 characters ("org") without using .length.

let url = "https://freecodecamp.org";

let url_result = url.slice(-3);

console.log(url_result);



// CORRECTIONS
// Note: Declaring variables without declaration makes it global and can cause bugs.


// Avoid Magic Number
let secret_word = "The password is: swordfish";
let index = secret_word.indexOf("swordfish");

if (index !== -1) {
  console.log(secret.slice(index)); // safer
}


// includes() method continued

let texting = "Hello, JavaScript world!";
let text_result = texting.includes("JavaScript", 7);

console.log(text_result);  // true


// slice() Method
// The slice() method allows you to extract a portion of a string and returns a new string, without modifying the original string. 
// It takes two parameters: the starting index and the optional ending index.

// Basic Syntax
// string.slice(startIndex, endIndex);

// Note: startIndex is the position where the extraction starts. 
// endIndex is where the extraction ends. If not provided, slice() extracts until the end of the string.

// Example on slice() method
let code_message = "Hello, world!";
let code_greeting = code_message.slice(0, 5);

console.log(code_greeting);  // Hello

// In this example, slice(0, 5) extracts characters starting from index 0 up to but not including index 5. 
// As a result, the word Hello is extracted.
// If you omit the second parameter, slice() will extract everything from the start index to the end of the string:


let message = "Hello, world!";
let world = message.slice(7);

console.log(world);  // world!


// You can also use negative numbers as indexes. When you use a negative number, it counts backward from the end of the string:

let java_message = "JavaScript is fun!";
let lastWord = message.slice(-4);

console.log(lastWord);  // fun!


// Changing the Case for a string

// toUpperCase() 
let simple_greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);  // Output: "HELLO, WORLD!"



// toLowerCase()

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // Output: "i am learning javascript!"


// Trimming whitespaces from a string
// Whitespace refers to spaces, tabs, or line breaks that occur in a string but are not visible characters. 

// The trim() method is the most commonly used way to remove whitespace from both the beginning and the end of a string.

let trimMessage = "   Hello!   ";
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // Output: "Hello!"

// The trimStart() removes whitespace from the beginning or start of a string

let trimGreeting1 = "   Hello!   ";
let trimmedStart = greeting.trimStart();

console.log(trimmedStart);  // Output: "Hello!   "

// The trimEnd() removes whitespace from the end of a string

let trimGreeting2 = "   Hello!   ";
let trimmedEnd = greeting.trimEnd();

console.log(trimmedEnd);  // Output: "   Hello!"


// Replacing Part of a string with another

// The replace() method in JavaScript allows you to find a specified value (like a word or character) in a string and replace it with another value.

//Synatx for replacing the part of a string with another: string.replace(searchValue, newValue);

// searchValue is the value you want to search for in the string.

// The newValue is the value that will replace the searchValue

let text = "I love JavaScript!";
let newText = text.replace("JavaScript", "coding");

console.log(newText);  // Output: "I love coding!"

// Note: By default, the replace() method will only replace the first occurrence of the searchValue. If the value appears multiple times in the string, only the first one will be replaced:

let simplePhrase = "Hello, world! Welcome to the world of coding.";
let updatedPhrase = phrase.replace("world", "universe");

console.log(updatedPhrase);  // Output: "Hello, universe! Welcome to the world of coding."


// Repeating a string x number of Times

// The repeat() method is a built-in function in JavaScript that allows you to repeat a string a specified number of times.
//  Here is the basic syntax: string.repeat(count);
// string is the string that you want to repeat, and count is the number of times you want the string to be repeated. Here's an example:

let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // Output: "Hello!Hello!Hello!"

// Note: The count parameter must be a non-negative number. If you pass a negative number, JavaScript will throw a RangeError.

let wordTest = "Test";
console.log(wordTest.repeat(-1));  // Throws RangeError: Invalid count value


// Note: The count must be a finite number. If you try to repeat a string an infinite number of times or use Infinity as the count, you will also get a RangeError.

// Infinity is a special value that represents an infinite quantity. It's used to denote numbers that are larger than any finite number.

let wordTest2 = "Test";
console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value

// If the count is not an integer (such as a decimal like 2.5), the repeat() method will round it down to the nearest integer.

let wordTest3 = "Test";
console.log(wordTest3.repeat(2.5));  // Output: "TestTest"

// If you pass 0 as the count, the repeat() method will return an empty string.

let wordTest4 = "Test";
console.log(wordTest4.repeat(0));  // Output: ""



























