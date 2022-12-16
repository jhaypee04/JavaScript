var para = document.querySelector('#para');
var inputEvent = document.querySelector('input');

inputEvent.addEventListener('keydown', function(){
    para.innerHTML += event.key;
    console.dir(event);
});