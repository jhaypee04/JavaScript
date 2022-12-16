var p = document.querySelector('p');
// The Array
let fruits = [
    'orange',
    'mango',
    'pear',
    'coconut',
    'apple',
    'banana'
];
// Spread Operator on Array
p.innerHTML += `<br><em style='color: olive;'>Spread Operator (example) = Fruits: ${ [ 'I love ', ...fruits] }.</em>`;

// Rest Operator on Array
const [first,second, ...remaining] = fruits;
p.innerHTML += `<br><em style='color: green'>Rest Operator (example) = Fruits: But I love  ${ second } and ${first} the most. </em>`;


// A String
let str = 'data.info.fullname.first';
// Rest Operator on Object
const [ first1, ...leftOver ] = str.split('.');
console.log(first1)

