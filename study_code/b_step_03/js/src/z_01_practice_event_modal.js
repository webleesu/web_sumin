// z_01_practice_event_modal.js

// 변수
var contentPart = document.querySelector('.content_part');
var contentLi = contentPart.querySelectorAll('li');

var modal = document.querySelector('.modal');
var closeBtn = modal.querySelector('button');

// var clickLi
console.log(modal);

var modalDisplay = modal.getComputedStyle(modal).display;
console.log(modalDisplay);
modalDisplay = 'block';
// console.log(modalDisplay);
// contentLi.addEventListner('click', function(event){
//   event.preventDefault();
//   modalDisplay = 'block';

// });