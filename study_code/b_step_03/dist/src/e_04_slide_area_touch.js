// e_04_slide_area_touch.js

// ======================================================
/** 전체 시나리오
 * 1. 터치기반의 형식으로 광고 슬라이드 제작
 * 2. 마우스 기반의 드래그 형식의 슬라이드 제작
 * 3. slide 광고 틀 제작(json 형식의 외부데이터 불러오기)
 */
// ======================================================
/** 
 * 외부 데이터 불러와서 적용(html - 임시)
 */
// ======================================================
// ======================================================

const path = "../temp/slide_area3.html";

const elViewBox = document.querySelector('#viewBox');
const elTitle = document.querySelector('head>title');
// let elViewWrap;
// let elViewLi;

fetch(path)
.then( (response) => response.text()  )
// .then( console.log ) // 외부 데이터 제대로 불러와졌나 콘솔에 text형식으로 확인
.then( (data) => {
  elViewBox.innerHTML = data;
})
.then(()=>{
  const linkCss = document.createElement('link');
  linkCss.setAttribute('rel', 'stylesheet');
  linkCss.setAttribute('href', '../css/src/e_04_slide_area_touch.css');
  elTitle.before(linkCss); // title태그 이전에 불러오기
})
.then(()=>{
  const elViewWrap = elViewBox.querySelector('.view_wrap');
  const elViewLi = elViewBox.querySelectorAll('li');
  const cloneEl = elViewLi[elViewLi.length -1].cloneNode(true); // li 틀이 아닌 내부 요소까지 전부 복제
  elViewWrap.prepend(cloneEl); // 마지막 요소를 복제해서 제일 앞으로 배치
  return [elViewWrap, elViewLi];
})
.then((el)=>{
  const elViewCon = elViewBox.querySelector('.view_content');
  elViewCon.style.overflowX = 'hidden';

  // 좌표 x의 이동점의 차이가 100px이상 나면 해당하는 위치로 이동
  const pointer = {}; // { start, end, gap };

  // 기능 -----------------------------------------------------
  el[0].style.position = 'relative';
  el[0].style.left = 0;
  el[0].style.transition = 'left 500ms linear';
  let SLIDE_COUNT = 0;

  // 함수 -----------------------------------------------------
  const fnSlideMove = () => {
    if(pointer.gap >= 100){
      SLIDE_COUNT -= 1;
      // el[0].style.left = 100 * SLIDE_COUNT + '%';
    }else if(pointer.gap <= -100){
      SLIDE_COUNT += 1;
      // el[0].style.left = 100 * SLIDE_COUNT + '%';
    }
    el[0].style.left = 100 * SLIDE_COUNT + '%';
  };
  
  // 이벤트 -----------------------------------------------------
  elViewCon.addEventListener('touchstart', (e) => {
    // console.log( '시작점 :', e.changedTouches[0].pageX );
    pointer.start = e.changedTouches[0].pageX;

  });

  elViewCon.addEventListener('touchend', (e) => {
    // console.log( '끝점 :', e.changedTouches[0].pageX );
    pointer.end = e.changedTouches[0].pageX;

    pointer.gap = pointer.start - pointer.end;
    // console.log( pointer );
    /* 갭이 100이상 차이날 경우 앞 뒤 li보여주는 내 풀이
    if(pointer.gap >= 100){
      el[0].style.marginLeft = '-200%';
    }else if( pointer.gap <= -100){
      el[0].style.marginLeft = '0%';
    }
    */
  
  // let gap = Math.abs(pointer.gap); // 절대값

  fnSlideMove();



  });  


})