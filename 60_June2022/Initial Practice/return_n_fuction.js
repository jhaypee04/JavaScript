// This practice is from Laurence Lars Svekis, Maaike van Putten, Rob Percival - JavaScript from Beginner to Professional_ Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages-Packt Pu.
// Practice exercise 6.4
//      To demonstrate return in function
var emptyArr = [];
counter = 10;

function addNum(a,b){
    return a+b;
}

for (let i = 0; i < counter; i++ ) {
    let val1 = i * 5;
    let val2 = i * i;
    var value = addNum(val1, val2);
    emptyArr.push(value);
}
console.log(emptyArr);
var p = document.querySelector('#printArray');
p.innerHTML += emptyArr;