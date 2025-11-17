// let h1 = document.querySelector('h1')

// h1.style.fontSize = '100px'
// h1.style.color = 'white'
// h1.innerHTML = 'Hello! Guys'
// h1.style.backgroundColor = 'grey'
// h1.style.width = '520px'

// let box = document.getElementById('box')
// box.style.borderRadius = '50%'
// box.style.width = '400px'
// box.style.height = '400px'

// let btn3 = document.getElementById('btn3')

// function rgc(){
//     return Math.floor(Math.random()*256);
// }

// box.addEventListener('mousemove', function(){
//     box.style.backgroundColor = `rgb(${rgc()}, ${rgc()}, ${rgc()})`;
//     box.style.borderColor = `rgb(${rgc()}, ${rgc()}, ${rgc()})`;

// })

// h1.addEventListener('mousemove', function(){
//     h1.style.color = 'red'
//     box.style.color = 'black'
// })

// h1.addEventListener('mouseout', function(){
//     h1.style.color = 'black'
//     box.style.color = 'red'
// })

// let btn1 = document.querySelector('#btn1')
// let n = 1;
// btn1.addEventListener('click', function(){
//     n +=5;
//     box.style.fontSize = n+'rem';
// })

// let btn2 = document.querySelector('#btn2')
// btn2.addEventListener('click', function(){
//     n -=5;
//     box.style.fontSize = n+'rem';
// })
//------------------------------------------------------
let body = document.querySelector('body');

body.style.backgroundColor = '#000'

let arr = [
    {   name: 'Arshil',
        primary : '#00ffccff',
        secondary: '#00ffcc2a'},

    {   name: 'Sanjay',
        primary : '#ff0095ff',
        secondary: '#ff00952a'},

    {   name: 'Anshul',
        primary : '#0084ffff',
        secondary: '#0084ff2a'},

    {   name: 'Sarfraj',
        primary : '#6fff00ff',
        secondary: '#6fff002a'},

    {   name: 'Rinki',
        primary : '#ff0000ff',
        secondary: '#ff00002a'}];

let final = document.querySelector('#final');
// let h = document.querySelector('#h');
let h1 = document.querySelectorAll('h1');
let button = document.querySelector('button');

final.style.position = 'absolute';
final.style.left = '50%'
final.style.top = '50%'
final.style.transform = 'translate(-50%,-50%)';
final.style.display = 'flex';
final.style.flexDirection = 'column';
final.style.alignItems = 'center'
final.style.gap = '5rem'

h1[0].style.color = 'green';
h1[0].style.fontFamily = 'Cambria'

h1[1].style.backgroundColor = 'mediumaquamarine';
h1[1].style.padding = '1rem';
h1[1].style.borderRadius = '1.3rem';
h1[1].style.border = '2px solid black';
h1[1].style.color = 'Green'
h1[1].style.backgroundColor = '#1eff0051'
h1[1].style.fontSize = '15rem'

button.style.backgroundColor = '#d0ff34ff';
button.style.fontSize = '1rem';
button.style.padding = '1rem';
button.style.borderRadius = '.9rem'


button.addEventListener('click', function(){
    let temp = Math.floor(Math.random()*arr.length);
    h1[1].innerHTML = arr[temp].name;
    h1[1].style.color = arr[temp].primary;
    h1[1].style.backgroundColor = arr[temp].secondary;
})

button.addEventListener('mousedown', function(){ 
    button.style.backgroundColor = '#d0ff34ff';
    button.style.color = 'blue'
})

button.addEventListener('mouseup', function(){
    button.style.backgroundColor = '#d0ff348f';
    button.style.color = 'Green'
})
//---------------------------------------------------------------

