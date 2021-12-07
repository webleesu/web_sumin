// c_01_dom_sample_01.js

/*
  1. 버튼을 클릭한다. -> 메뉴 나타나라                // document.getElementsByClassName('navbar-toggler');
  1-1. 버튼 : navbar-toggler -> var navToggleBtn = document.querySelector('.navbar-toggler');
  1-2. 클릭 : 선택자 클릭(addEventListener) -> navToggleBtn.addEventListener('click', function(event){});
  1-3. 메뉴 : id="navbarSupportedContent" -> document.querySelector('#navbarSupportedContent');
                                            // document.getElementById('navbarSupportedContent');
  1-4. 나타나기 : html.classname="action" : class이름 추가 + (none -> block)
  1-5. 기능을 수행하기 전 체크 : 
      해당 버튼의 고유기능 해제( event.preventDefault(); )
      action의 유무( classList.contains('action') )
*/

var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');

navToggleBtn.addEventListener('click', function(event){
  // 1-5 사전기능 처리 : 
  //  1. 기존 고유기능 해제 event.preventDefault();
  //  2. action 유무 판단 classList.contains('action')
  var isAction = navbarSupportedContent.classList.contains('action');
  console.log(isAction);
  // 1-4 수행
  if(!isAction){
    navbarSupportedContent.classList.add('action');
  }else {
    navbarSupportedContent.classList.remove('action');
  }
});

var box = document.querySelector('.box');
var boxBtn = box.querySelector('a');
boxBtn.addEventListener('click', function(event){
  console.log(event);
  event.preventDefault();
});

// ---------------------------------------------------------------------------------
// jQuery 코드로작성시
/*
var navToggleBtn = $('.navbar-toggler');
var navbarSupportedContent = $('#navbarSupportedContent');

navToggleBtn.on('click', function(event){
  event.preventDefault();
  var checkClassName = 'on';
  // 1-5 사전기능 처리 : 
  var isAction = navbarSupportedContent.hasClass(checkClassName);
  // 1-4 수행
  if(!isAction){
    navbarSupportedContent.addClass(checkClassName);
  }else{
    navbarSupportedContent.removeClass(checkClassName);
  }
});
*/
