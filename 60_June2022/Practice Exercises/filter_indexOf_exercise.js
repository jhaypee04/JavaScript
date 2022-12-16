// Practice exercise 8.2
// Remove duplicates from the array using filter() and indexOf(). The starting array
// is:
// ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
// "Laurence", "Mike", "Laurence", "Mike"]
// Using the array filter() method, this will create a new array using the elements that
// pass the test condition implemented by the function. The final result will be:
// [ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne' ]
// Take the following steps:
// 1. Create an array of names of people. Make sure you include duplicates. The
// exercise will remove the duplicate names.
// 2. Using the filter() method, assign the results of each item from the array as
// arguments within an anonymous function. Using the value, index, and array
// arguments, return the filtered result. You can set the return value to true
// temporarily as this will build the new array with all the results in the original
// array.
// 3. Add a console.log call within the function that will output the index value
// of the current item in the array. Also add the value so you can see the results
// of the item value that has the current index number and the first matching
// result from the array's index value.
// 4. Using indexOf() the current value returns the index value of the item
// and applies the condition to check to see if it matches the original index
// value. This condition will only be true on the first result so all subsequent
// duplicates will be false and not get added to the new array. false will not
// return the value into the new array. The duplicates will all be false since the
// indexof() only gets the first match in the array.
// 5. Output the new, unique value array onto the console.

// Solution:
// step 1
var list_of_people_names = [ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne', 'Laurence', 'Mike', 'Laurence', 'Mike', 'Laurence', 'Mike' ]

// console.log(list_of_people_names.indexOf('Joanne'))
// step 2
var singular_list = list_of_people_names.filter(function(person, position, list){
    return list.indexOf(person) === position;
})
console.log(singular_list)
