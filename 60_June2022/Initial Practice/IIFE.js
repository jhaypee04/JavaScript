(function () {
    console.log("IIFE!");
})();

// Practice Exercise 6.5:
// This practice is from Laurence Lars Svekis, Maaike van Putten, Rob Percival - JavaScript from Beginner to Professional_ Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages-Packt Pu.

// Use IIFE to create a few immediately invoked functions and observe how the scope is
// affected.
// 1. Create a variable value with let and assign a string value of 1000 to it.
let variable = "1000";
// 2. Create an IIFE function and within this function scope assign a new value to a variable of the same name.
(function (){
    //  Within the function, print the local value to the console.
    let variable = "2000";
})();
// 3. Create an IIFE expression, assigning it to a new result variable, and assign a new value to a variable of the same name within this scope.
var result = (function (){
    let variable = "3000";
    return variable;
})();
//  Return this local value to the result variable and invoke the function. Print the result variable, along with the variable name you've been using: what value does it contain now?
console.log( 
`Result Variable: ${result}
Variable value: ${variable}!`);
// 4. Lastly, create an anonymous function that has a parameter. Add logic that will assign a passed-in value to the same variable name as the other steps, and print it as part of a string sentence. Invoke the function and pass in your desired value within the rounded brackets.
(function (val) {
    console.log(`The Sum is ${val}`);
})("100,000");