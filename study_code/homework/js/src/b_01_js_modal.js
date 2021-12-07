// b_01_js_modal.js

var img_btn = document.querySelector('.img_btn');
var modal = document.querySelector('.modal');
var close = modal.querySelector('.close');
var modalOp = getComputedStyle(modal).opacity;
var permission = true;
var displayOp;

// var modalDisplay = function(opacity){
//   var modalDisplayState = getComputedStyle(modal).display === 'none';
//   var setOp = opacity;
//   if(permission && modalDisplayState) {
//     permission = false;
//     modal.style.display = 'block';
//     modal.style.opacity = setOp;
//     displayOp = setinterval(function(){
//       setOp += 1;
//       if(setOp <= 100){
//         modal.style.opacity = calc(setOp / 100);
//       }else {
//         clearInterval(displayOp);
//         modal.style = null;
//         modal.style.display = 'block';
//         permission = true;
//       }
//     },1000);

//   }
  
// }

img_btn.addEventListener('click', function(event){
  event.preventDefault();
  modal.classList.add('on');
});

close.addEventListener('click', function(event){
  event.preventDefault();
  modal.classList.remove('on');
});

console.log(modalOp);