"use strict";

require("core-js/modules/es.array.concat.js");

// e_01_slide_area_fade.js
// -------------------------------------
// 시나리오
// 다음버튼 클릭시 - 'fadeOut'/(fadeIn) 기능을 이용하여, 이미지 변경
// 1. 현재 보이는 이미지(z-index:10) 에 버튼 클릭시 보이는 이미지 바로뒤 에 이미지가 나타나게 만들기
// 2. 현재 보이는 이미지를 투명도 1->0으로 변경 ( 100%, 50%, 0 )
// 3. 투명도가 0이 되면 display:none으로 사라지게
// 4. animation기법으로 처리되어 사라진 이미지 style(html에 새겨진) 제거
// -------------------------------------
(function () {
  // 선택자 변수
  var elViewBox2 = document.querySelector('#viewBox2');
  var elSlide = elViewBox2.querySelector('.slide_02');
  var elBtnPart = elSlide.querySelector('.view_btn');
  var elNext = elBtnPart.querySelector('.next');
  var elPrev = elBtnPart.querySelector('.prev');
  var indi = elSlide.querySelector('.indicator');
  indi.remove();
  var viewCon = elSlide.querySelector('.view_content ul');
  var viewLi = viewCon.querySelectorAll('li'); // 옵션변수
  // let CLASS_CHECK = 'act';
  // let countIndex = 0;

  var CLASS_CHECK = 'act',
      countIndex = 0,
      timed = 500,
      cssFn = 'ease'; // -------------------------------------------------------------

  viewLi[countIndex].classList.remove('on'); // viewLi[countIndex].style.display = 'block';
  // viewLi[countIndex].style.zIndex = '10';
  // viewLi[countIndex].style.position = 'absolute';
  // viewLi[countIndex].style.transition = `all ${timed}ms  ${cssFn}`;
  // -------------------------------------------------------------
  // 함수
  // const fnOpacity = async () => {
  //   viewLi[countIndex+1].style.display = 'block';
  //   viewLi[countIndex].style.opacity = 0;
  // }

  var fnInsertStyle = function fnInsertStyle() {
    viewLi[countIndex].style.display = 'block';
    viewLi[countIndex].style.zIndex = '10';
    viewLi[countIndex].style.position = 'absolute';
    viewLi[countIndex].style.transition = "all ".concat(timed, "ms  ").concat(cssFn);
  }; // -------------------------------------------------------------
  // 이벤트처리
  // elNext클릭시


  elNext.addEventListener('click', function (e) {
    e.preventDefault(); // 수행1

    viewLi[countIndex + 1].style.display = 'block';
    viewLi[countIndex].style.opacity = 0; // 수행2

    setTimeout(function () {
      viewLi[countIndex].removeAttribute('style'); // viewLi[countIndex].style = null; // .removeAttribute('style');
    }, timed);
  });
})();