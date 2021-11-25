// c_04_dom_blind_btn_02.js

// ----------------------------------------------------
var jsBtn = document.querySelector('.btn');
var jsCloseBtn = jsBtn.querySelector('.close');
var jsOpenBtn = jsBtn.querySelector('.open');
var jsOpenBtn2 = jsBtn.querySelector('.open2');
var jsContentArea = document.querySelector('.content_area');
// ----------------------------------------------------
var conH = getComputedStyle(jsContentArea).height;
var conHResult = parseInt(conH);
var timed = 5;
var slideH;
// 함수 ----------------------------------------
var slideUpFn = function(height){
  var setH = height;
  slideH = setInterval(function(){
    setH -= 1;
    if(setH >= 0) {
      jsContentArea.style.height = setH + 'px'
    }else{
      clearInterval(slideH);
      // jsContentArea.style = null;
      jsContentArea.style.display = 'none';
    }
  }, timed);
}

// jsCloseBtn 클릭 이벤트
jsCloseBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideUpFn(conHResult);
});