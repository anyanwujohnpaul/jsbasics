
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

console.log("This is the first line\nAnd this is the second")

console.log("I am going to become a top 1% JavaScript Developer in the World\nAnd I will speak at JSConference 2026");

console.log("I am JP\tLet see what yiu have got");


console.log("A newline character is written like \"\\n\".");




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
console.log("Aardvark" < "Zoroaster")
// True

// In JS, uppercase letter are always less than lower case letter

console.log("Z" < "a");

// Not Equal to Operator
console.log("Garnet" != "Ruby")
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
console.log(NaN == NaN)
// False


// Logical Operators











