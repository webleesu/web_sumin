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

  const ulStyle = elSlideUl.style;
  ulStyle.width = ((slideLen + 1) * 100) +'%';
  ulStyle.position = 'relative';
  ulStyle.left = 0;
  ulStyle.marginLeft = '-100%';
  // elSlideContent.style.overflowX = 'hidden';

  const elSlideLiRe = elSlideUl.querySelectorAll('li');
  const elSlideLiReCvt = [].slice.call(elSlideLiRe);

  elSlideLiReCvt.forEach( (li, idx) => {
    li.style.width = (100 / (slideLen + 1)) +'%';
  });
  
  // ----------------------------------------------------------------

/*
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let i = 0;
  // const fnNextBtn = function clickCounter(){
  //   if(i < 2){
  //     i+=1;
  //     elSlideUl.style.left = -(i * 100) + '%';
  //   }else {
  //     elSlideUl.style.left = '100%';
  //     i = -1;
  //   }
  // }

  const fnNextBtn = function clickCounter(){
    if(elSlideUl.style.left !== '-200%'){
      i+=1;
      elSlideUl.style.left = -(i * 100) + '%';
      
    }else {
      elSlideUl.style.left = '100%';
      i = -1;
    }
  }

  const fnPrevBtn = function clickCounter(){
    if(elSlideUl.style.left === '0%'){
      elSlideUl.style.left = '-300%';
      i = -1;
      
    }else {
      i+=1;
      elSlideUl.style.left = (i * 100) + '%';
    }
  }

  

  nextBtn.addEventListener('click', function(e){
    e.preventDefault();
    fnNextBtn();
  });

  prevBtn.addEventListener('click', function(e){
    e.preventDefault();
    fnPrevBtn();
  });
*/
const slideNext = document.querySelector('.next');
const slidePrev = document.querySelector('.prev');

let SLIDE_COUNT = 0;
let TIME_OPTION = 500;
let PERMISSION = true;
ulStyle.transition = `left ${TIME_OPTION}ms linear`;

const fnDelay = async (ms = 0) => {
  return await new Promise(resolve=>{
    setTimeout(() => { resolve(); }, ms);
  });
};

const fnAniSlide = async () => {
  await fnDelay();
  ulStyle.transition = `left ${TIME_OPTION}ms linear`;
  ulStyle.left = (-100 * SLIDE_COUNT) + '%';
  await fnDelay(TIME_OPTION + 100);
  PERMISSION = true;
}

slideNext.addEventListener('click', (e) => {
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    
    SLIDE_COUNT += 1;
  
    if(SLIDE_COUNT >= slideLen){
      SLIDE_COUNT = 0;
      ulStyle.transition = null;
      ulStyle.left = 100 + '%';
    }
  
/*
    setTimeout(() => {
      ulStyle.transition = `left ${TIME_OPTION}ms linear`;
      ulStyle.left = (-100 * SLIDE_COUNT) + '%';

      setTimeout(() => {
        PERMISSION = true;
      }, TIME_OPTION + 200);

    }, 0);
*/
    fnAniSlide();
  } // if
}); // slideNext.click

// ------------------------------------------------------------------
/* 이전버튼 내가 시도 -> 실패
slidePrev.addEventListener('click', (e) => {
  e.preventDefault();

  if(PERMISSION){
    PERMISSION = false;

    SLIDE_COUNT -= 1;

    if(SLIDE_COUNT <= -1){
      SLIDE_COUNT = 3;
      ulStyle.transition = null;
      ulStyle.left = -300 + '%'
    }
    fnAniSlidePre();

  }

}); // slidePrev.click
*/


// 이전버튼 클릭
slidePrev.addEventListener('click', (e) => {
  e.preventDefault();
  if(PERMISSION === true){
    PERMISSION = false;

    SLIDE_COUNT -= 1;
    // 최종결과물이 다음버튼 클릭시 음수 수치, 이전버튼 클릭시 양수 수치 
    ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';

    

    // TIME_OPTION 시간이 지난 후에 SLIDE_COUNT 값을 파악하여 추가 진행
    /*
    setTimeout( () => {
      if(SLIDE_COUNT <= -1){
        SLIDE_COUNT = slideLen -1;
        ulStyle.transition = null;
        ulStyle.left = (-100 * SLIDE_COUNT) + '%'; 
        setTimeout( () => {
          ulStyle.transition = `left ${TIME_OPTION}ms linear`;
          // PERMISSION = true;
        }, 10);
      }
    }, TIME_OPTION);
    */

    const aniPrevSlide = async () => {
      ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';
      await fnDelay(TIME_OPTION);
      if(SLIDE_COUNT <= -1){
        SLIDE_COUNT = slideLen -1;
        ulStyle.transition = null;
        ulStyle.left = (-100 * SLIDE_COUNT) + '%'; 
      }
      await fnDelay(200);
      ulStyle.transition = `left ${TIME_OPTION}ms linear`;
      await fnDelay();
      PERMISSION = true;
    };
    aniPrevSlide();

  } // if

}); // slidePrev.click
  // -----------------------------------------------------------
})()