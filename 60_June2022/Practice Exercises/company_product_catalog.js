// Company product catalog
// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and
// quantity.
// 3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.

var inventory = [];
let item1 = {
    name: 'milkos',
    model: 'caramel',
    cost: 5,
    quantity: 1,
}
let item2 = {
    name: 'lolly pop',
    model: 'Stick Sweet',
    cost: 15,
    quantity: 3,
}
let item3 = {
    name: 'Tom Tom',
    model: 'caramel',
    cost: 20,
    quantity: 4,
}
inventory.push(item1, item2, item3);
console.log(inventory);
// Third item, quantity value
var thirdItem = item3.quantity;
console.log(thirdItem);