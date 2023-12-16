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

var color=document.getElementById('c');
var font=document.getElementById('f');
var size=document.getElementById('s');

var nav = document.getElementById('nav');
var content = document.getElementById('content');
console.log("working");


cRed.addEventListener('click', function() {
    paragraph.style.color='red';
    nav.style.boxShadow="0px 2px 3px 0px red";
    content.style.boxShadow="0px 2px 3px 0px red";
    cRed.classList.add('active');
    color.innerHTML='RED';
});

cGreen.addEventListener('click', function() {
    paragraph.style.color='green';
    nav.style.boxShadow="0px 2px 3px 0px green";
    content.style.boxShadow="0px 2px 3px 0px green";
    color.innerHTML='GREEN';
});

cBlue.addEventListener('click', function() {
    paragraph.style.color='blue';
    nav.style.boxShadow="0px 2px 3px 0px blue";
    content.style.boxShadow="0px 2px 3px 0px blue";
    color.innerHTML='BLUE';
});

b10.addEventListener('click', function() {
    paragraph.style.fontSize='10px';
    size.innerHTML="10px";
});

b20.addEventListener('click', function() {
    paragraph.style.fontSize='20px';
    size.innerHTML="20px";
});

b30.addEventListener('click', function() {
    paragraph.style.fontSize='30px';
    size.innerHTML="30px";
});

fF1.addEventListener('click', function() {
    paragraph.style.fontFamily='Times New Roman, Times, serif';
    font.innerHTML="Times New Roman";
});

fF2.addEventListener('click', function() {
    paragraph.style.fontFamily='Lucida Console, Courier New, monospace';
    font.innerHTML="Courier";
});

fF3.addEventListener('click', function() {
    paragraph.style.fontFamily='Arial, Helvetica, sans-serif';
    font.innerHTML="Arial";

});

