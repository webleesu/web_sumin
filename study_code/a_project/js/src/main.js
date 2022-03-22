// main.js

// #header 스크롤시 움직임============================================================
const elHeader = document.querySelector('#headBox');
const removeContains = elHeader.classList.contains('remove_header');
const dropContains = elHeader.classList.contains('drop_header');
// let scrollY = this.scrollY;
let wheelPermission = true;


window.addEventListener('mousewheel', (e) => {
  
  let wheel = e.wheelDelta;
  if(wheel < 0 && removeContains !== true){ //마우스 휠을 아래로 내리면 헤더 사라짐
    elHeader.classList.add('remove_header');
    elHeader.classList.remove('drop_header');
    elHeader.style.top = '-500px';
  } else { // 마우스 휠을 위로 올리면 헤더 나타남
    elHeader.classList.add('drop_header');
    elHeader.classList.remove('remove_header');
    elHeader.style.top = 0;
  }

});

// #viewBox 광고영역 슬라이드 ==============================================================
// 변수 ------------------------------------------------------------------
const elViewBox = document.querySelector('#viewBox');
const elViewArea = elViewBox.querySelector('.view_area');

const elViewBtn = elViewBox.querySelector('.view_btn');
const elNext = elViewBox.querySelector('.view_after_btn');;
const elPrev = elViewBox.querySelector('.view_before_btn');;

const view = elViewArea.querySelector('.view');
const conUl = view.querySelector('.view_in_wrap');
let conLi;
const fnConLi =  ()=>{
  const li = conUl.querySelectorAll('.view_content');
  conLi =  [].slice.call(li);
};
fnConLi();

const elTotalCount = elViewArea.querySelector('.view_total_count');
const elNowCount = elViewArea.querySelector('.view_now_count');
// -----------------------------------------------------------------------
// 추가 변수
const slideLen = conLi.length;
let SLIDE_COUNT = 0;
let BEFORE_COUNT = SLIDE_COUNT;
let timed = 500;
let cssFn = 'ease';
let permission = true;

// -----------------------------------------------------------------------

elTotalCount.innerText = slideLen; // 인디케이터 숫자 토탈숫자 넣기
// 현재 슬라이드 위치 표현
const fnNowCount = () => {
  elNowCount.innerText = SLIDE_COUNT + 1;
}

// conLi[SLIDE_COUNT].classList.add('on');

const fnDelay = async ( t = timed ) => {
  const promise = new Promise(resolve => {
    setTimeout( ()=> {
      permission = true;
      resolve(permission);
    }, t)
  });
  return await promise;
};
// 1. 뒤에 즉시 나타나기(opacity:1, display:block, z:01)
// 2. on의 opacity처리되기 (500ms시간동안 )
// 3. 일정시간뒤 on삭제 (500ms 뒤에수행)
// 4. 나타난요소에 on 첨부 (4번과동일수행 on에 z100)


const fnOpacity = () => {
  conLi[SLIDE_COUNT].style.display = 'block';
  // conLi[SLIDE_COUNT].style.zIndex = 10;

  conLi[BEFORE_COUNT].style.transition = `all ${timed}ms ease`;
  conLi[BEFORE_COUNT].style.opacity = 0;

  // conLi[BEFORE_COUNT].classList.remove('on');
  // conLi[SLIDE_COUNT].classList.add('on');

  fnDelay(timed)
    .then( () => {
      conLi[BEFORE_COUNT].removeAttribute('style');
      conLi[BEFORE_COUNT].classList.remove('on');
      conLi[SLIDE_COUNT].classList.add('on');
      BEFORE_COUNT = SLIDE_COUNT;
    })
}


const fnSlide = () => {
  if(permission){
    permission = false;
    if(SLIDE_COUNT < slideLen-1){
      SLIDE_COUNT += 1;
    }else {
      SLIDE_COUNT = 0;
    }
    fnOpacity();
    fnNowCount();
  }
}
// elNext
elNext.addEventListener('click', (e)=>{
  e.preventDefault();
  fnSlide();
  
});

// elPrev
elPrev.addEventListener('click', (e)=>{
  e.preventDefault();

  if(permission){
    permission = false;
    if(SLIDE_COUNT <= 0){
      SLIDE_COUNT = slideLen -1;
    }else{
      SLIDE_COUNT -= 1;
    }
    fnOpacity();
    fnNowCount();
  }
});

let slideGo;

const fnSlideMove = () => {
  slideGo = setInterval(() => {
    // SLIDE_COUNT += 1;
    fnSlide();
  }, 5000);
}

fnSlideMove();


// awards 광고 슬라이드 =================================================================================

/**
 * 시나리오
 * 1. class black 삭제
 * 2. 다음 버튼 누르면 nth-child(1), (5)에는 class black 추가
 * 3. 슬라이드 하나씩 움직이기 - transform transition
 * 4. indicator 같이 움직이기
 */

// 변수
const elAwardsBtn = document.querySelector('.awards_btn');
// const elNextBtn = document.querySelector('.awards_after_btn');
// const elPrevBtn = document.querySelector('.awards_before_btn');

const elAwardsUl = document.querySelector('.awards_main');
let elAwardsLi = elAwardsUl.querySelectorAll('.awards');

let PERMISSION = true;


const fnAwardSlideMove = (e) => {
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    let target = (name) => e.target.classList.contains(name);
    let elSlide = [...elAwardsLi];
    if(target('awards_after_btn')){
      elAwardsUl.append( elSlide.at(0) );
    }else {
      elAwardsUl.prepend( elSlide.at(-1) );
    }
    elAwardsLi = elAwardsUl.querySelectorAll('.awards');
    setTimeout(() => { PERMISSION = true}, 500);
  }
};

elAwardsBtn.addEventListener('click', fnAwardSlideMove);


// --------------------------------------------------------------------------
