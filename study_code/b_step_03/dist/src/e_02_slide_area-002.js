// e_02_slide_area-002.js

(() => {
  const elViewBox = document.querySelector('#viewBox');
  const elSlideContent = document.querySelector('.slide_content');
  const elSlideUl = elSlideContent.querySelector('.slide_wrapper'); // ul
  const elSlideLi = elSlideUl.querySelectorAll('li');
  // const elSlideCvt = Array.prototype.slice.call(elSlideLi);
  const elSlideCvt = [].slice.call(elSlideLi);
  

  // 추가 설정 변수
  const slideLen = elSlideLi.length;
  // console.log(elSlideLi[slideLen -1]);

  // 기능 처리  --------------------------------------------------
  // 마지막 요소 복제하여 앞에 붙이기()
  const elSlideLast = elSlideCvt.at(-1); // 마지막 요소를 선택
  // const cloneSlide = elSlideLast.cloneNode(); // 껍데기만 복제
  const cloneSlide = elSlideLast.cloneNode(true); // 선택요소를 내부까지 전부 복제
  elSlideUl.prepend(cloneSlide); // 복제요소를 앞으로 추가 첨부 : css에서 nth-child는 사용X(이름으로 할당)
  





  // -----------------------------------------------------------
})()