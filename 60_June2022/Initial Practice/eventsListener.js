var lightMode = true;
var btn = document.querySelector('button');
btn.onclick = function () {
    console.log('A button was clicked!')
    if(lightMode) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        btn.innerHTML = 'Light Mode'
        lightMode = false;
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        btn.innerHTML = 'Dark Mode';
        lightMode = true;
    }
}