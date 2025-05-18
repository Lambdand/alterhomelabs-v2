var x = window.innerWidth;
var y = window.innerHeight;
var r = document.querySelector(':root');

r.style.setProperty('--w', `${x}px`);
r.style.setProperty('--h', `${y}px`);

console.log(x);
console.log(y);