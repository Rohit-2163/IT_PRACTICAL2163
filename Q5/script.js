`use strict`
var paragraph = document.getElementById("paragraph");

var cRed = document.getElementById('c-red');
var cGreen = document.getElementById('c-green');
var cBlue = document.getElementById('c-blue');

var b10 = document.getElementById('b-10');
var b20 = document.getElementById('b-20');
var b30 = document.getElementById('b-30');

var fF1 = document.getElementById('f-f1');
var fF2 = document.getElementById('f-f2');
var fF3 = document.getElementById('f-f3');

var nav = document.getElementById('nav');
console.log("working");


cRed.addEventListener('click', function() {
    paragraph.style.color='red';
    nav.style.boxShadow="0px 2px 3px 0px red";
    cRed.classList.add('active');
});

cGreen.addEventListener('click', function() {
    paragraph.style.color='green';
    nav.style.boxShadow="0px 2px 3px 0px green";
});

cBlue.addEventListener('click', function() {
    paragraph.style.color='blue';
    nav.style.boxShadow="0px 2px 3px 0px blue";
});

b10.addEventListener('click', function() {
    paragraph.style.fontSize='10px';
});

b20.addEventListener('click', function() {
    paragraph.style.fontSize='20px';
});

b30.addEventListener('click', function() {
    paragraph.style.fontSize='30px';
});

fF1.addEventListener('click', function() {
    paragraph.style.fontFamily='sans-serif';
});

fF2.addEventListener('click', function() {
    paragraph.style.fontFamily='Times New Roman';
});

fF3.addEventListener('click', function() {
    paragraph.style.fontFamily='Arial';

});

