// Practice exercise 8.3
// Using the array map() method, update an array's contents. Take the following steps:
// 1. Create an array of numbers.
// 2. Using the array map method and an anonymous function, return an updated
// array, multiplying all the numbers in the array by 2. Output the result into
// the console.
// 3. As an alternative method, use the arrow function format to multiply each
// element of the array by 2 with the array map() method in one line of code.
// 4. Log the result onto the console.

// Solution
var arr_of_numbers = [ 1, 2, 3, 4, 5]
var timed_by_2 = arr_of_numbers.map(function( number ){
    return number * 2;
})
console.log(timed_by_2)