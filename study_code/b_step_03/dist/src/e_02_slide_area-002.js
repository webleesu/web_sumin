// e_02_slide_area-002.js

(() => {
  const elViewBox = document.querySelector('#viewBox');
  const elSlideContent = document.querySelector('.slide_content');
  const elSlideUl = elSlideContent.querySelector('.slide_wrapper'); // ul
  // 현재의 선택자 li는 복제 전 요소
  const elSlideLi = elSlideUl.querySelectorAll('li');
  // const elSlideCvt = Array.prototype.slice.call(elSlideLi);
  const elSlideCvt = [].slice.call(elSlideLi);
  

  // 추가 설정 변수
  const slideLen = elSlideLi.length;
  // console.log(elSlideLi[slideLen -1]);

  // 기능 처리  --------------------------------------------------
  // 1-1 마지막 요소 복제하여 앞에 붙이기(prepend) - li갯수 5개로 변경
  const elSlideLast = elSlideCvt.at(-1); // 마지막 요소를 선택
  // const cloneSlide = elSlideLast.cloneNode(); // 껍데기만 복제
  const cloneSlide = elSlideLast.cloneNode(true); // 선택요소를 내부까지 전부 복제
  elSlideUl.prepend(cloneSlide); // 복제요소를 앞으로 추가 첨부 : css에서 nth-child는 사용X(이름으로 할당)
  
  // 1-2 변경된 요소의 갯수에 맞게, elSlideUl의 사이즈와, 
  // 1-3 elSlideLi요소의 사이즈를 변경 (복제된 요소는 기존 변수로 선정된 요소와는 별개로 처리)
  // 1-4 메인에 보여주어야 하는 요소를 맞추기 위해 위치 이동 (왼쪽방향으로 -100%만큼 이동)

  elSlideUl.style.width = ((slideLen + 1) * 100) +'%';
  elSlideUl.style.position = 'relative';
  elSlideUl.style.marginLeft = '-100%';
  // elSlideContent.style.overflowX = 'hidden';

  const elSlideLiRe = elSlideUl.querySelectorAll('li');
  const elSlideLiReCvt = [].slice.call(elSlideLiRe);

  elSlideLiReCvt.forEach( (li, idx) => {
    li.style.width = (100 / (slideLen + 1)) +'%';
  });
  
  // ----------------------------------------------------------------







  // -----------------------------------------------------------
})()