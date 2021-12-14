"use strict";

// e_01_slide_area.js
// ===========================================
// 광고슬라이드1 
// -------------------------------------
// 시나리오
// 1. 다음버튼 클릭시 li의 다음내용이 나타나게만들기
// 1.1 li의 갯수
// 1.2 class='on'; 여부 
// 1.2.1 이전값 파악해서 on(+-)
// 1.2.2 선택한것 추가 다른것 빼기
// 1.2.3 전체를 빼고 선택한 요소 추가
// 1.3 순번이 마지막에 가면 처음으로 이동
// 2. 이전버튼을 클릭시 위 기능을 동일하게 수행
// -------------------------------------
// 요소 선택
var elSlide_01 = document.querySelector('.slide_01');
var elBtnDetail = elSlide_01.querySelector('.view_btn');
var elNext = elBtnDetail.querySelector('.next');
var elPrev = elBtnDetail.querySelector('.prev');
var elViewContent = elSlide_01.querySelector('.view_content');
var elViewConUl = elViewContent.querySelector('ul');
var elViewAddv = elViewConUl.querySelectorAll('li'); // elAddLen

var addLen = elViewAddv.length;
var OPTION_CLASSNAME = 'on';
var checkIndex = 0; // -----------------------------------------------------------
// 함수

var fnAddCount = function fnAddCount() {
  var i = checkIndex;
  checkIndex < addLen - 1 ? checkIndex += 1 : checkIndex = 0; // if(checkIndex < addLen -1){
  //   checkIndex += 1;
  // }else{
  //   checkIndex = 0;
  // }

  elViewAddv[i].classList.remove(OPTION_CLASSNAME);
  elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
};

var fnRemoveCount = function fnRemoveCount() {
  var i = checkIndex;
  checkIndex > 0 ? checkIndex -= 1 : checkIndex = addLen - 1; // if(checkIndex > 0){
  //   checkIndex -= 1;
  // }else {
  //   checkIndex = addLen -1;
  // }

  elViewAddv[i].classList.remove(OPTION_CLASSNAME);
  elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
}; // -----------------------------------------------------------
// 이벤트 ++
// 다음버튼 클릭


elNext.addEventListener('click', function (e) {
  e.preventDefault();
  fnAddCount();
}); // 이전버튼 클릭

elPrev.addEventListener('click', function (e) {
  e.preventDefault();
  fnRemoveCount();
});