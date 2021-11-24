// c_02_dom_make_nav_01.js

/* 클릭시 메뉴 나오는 코드 - 내 풀이
var navMenu = document.querySelector('.navi_btn');
var navMenuBtn = navMenu.querySelector('button');
var navInner = document.querySelector('.navi_inner');

navMenuBtn.addEventListener('click', function(event){
  var isAction = navInner.classList.contains('action');
  if(!isAction){
    navInner.classList.add('action');
  }else{
    navInner.classList.remove('action');
  }
});

var navDrop = document.querySelector('.drop_btn');
var navDropBtn = navDrop.querySelector('button');
var navDropInner = document.querySelector('.sub_menu');

navDropBtn.addEventListener('click', function(event){
  var isAction = navDropInner.classList.contains('action');
  if(!isAction){
    navDropInner.classList.add('action');
  }else{
    navDropInner.classList.remove('action');
  }
});
*/

// 변수영역 ------------------------------------------------
var navArea = document.querySelector('.nav_area');
var naviBtnSelector = navArea.querySelector('.navi_btn');
var naviBtn = naviBtnSelector.querySelector('button');
var navOn = 'on';

// 이벤트영역 ----------------------------------------------
naviBtn.addEventListener('click', function(event){
  event.preventDefault(); // 기존 기능 삭제
  // navArea.classList.toggle('on');
  var checkClassName = navArea.classList.contains(navOn);
  // if(checkClassName){
  //   navArea.classList.remove(navOn);
  // }else{
  //   navArea.classList.add(navOn);
  // }
  (checkClassName) ? navArea.classList.remove(navOn) : navArea.classList.add(navOn);
});

