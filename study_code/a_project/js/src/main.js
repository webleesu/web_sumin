// main.js

// #header 언어부분 ======================================================================
// 변수 ------------------------------------------------------------------
const elLanguage = document.querySelector('.unb_language');
const elLanArea = elLanguage.querySelector('.unb_lauguage_area');
let clickCount = 0;

elLanguage.addEventListener('click', (e)=>{
  e.preventDefault();
  
  if(clickCount === 0){
    elLanArea.style.display = 'block';
    clickCount = 1;
  }else {
    elLanArea.style.display = 'none';
    clickCount = 0;
  }
});

// const handheldsClick;
const elHandLanguage = document.querySelector('.hand_language');
const elHandUl = elHandLanguage.querySelector('.hand_language_area');
let handClickCount = 0;

elHandLanguage.addEventListener('click', (e) => {
  e.preventDefault();

  if(handClickCount === 0){
    console.log(elHandUl.style.display);
    elHandUl.style.display = 'block';
    handClickCount = 1;
  }else {
    elHandUl.style.display = 'none';
    handClickCount = 0;
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
const conLi = conUl.querySelectorAll('.view_content');

const elTotalCount = elViewArea.querySelector('.view_total_count');
const elNowCount = elViewArea.querySelector('.view_now_count');
// -----------------------------------------------------------------------
// 추가 변수
let SLIDE_COUNT = 0;
const slideLen = conLi.length;
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

const fnOpacity = () => {
  conLi[SLIDE_COUNT].style.display = 'block';

  conLi[BEFORE_COUNT].style.transition = `all ${timed}ms ease`;
  conLi[BEFORE_COUNT].style.opacity = 0;

  conLi[BEFORE_COUNT].classList.remove('on');
  conLi[SLIDE_COUNT].classList.add('on');

  fnDelay(timed)
    .then( () => {
      conLi[BEFORE_COUNT].removeAttribute('style');
      conLi[BEFORE_COUNT].classList.remove('on');
      conLi[SLIDE_COUNT].classList.add('on');
      BEFORE_COUNT = SLIDE_COUNT;
    })
}

// elNext
elNext.addEventListener('click', (e)=>{
  e.preventDefault();
  
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

// awards 광고 슬라이드 =================================================================================
// 변수
const elNextBtn = document.querySelector('.awards_after_btn');
const elPrevBtn = document.querySelector('.awards_before_btn');

const elAwardsUl = document.querySelector('.awards_main');
const elAwardsLi = elAwardsUl.querySelectorAll('.awards');

/**
 * 시나리오
 * 1. class black 삭제
 * 2. 다음 버튼 누르면 nth-child(1), (5)에는 class black 추가
 * 3. 슬라이드 하나씩 움직이기 - transform transition
 * 4. indicator 같이 움직이기
 */