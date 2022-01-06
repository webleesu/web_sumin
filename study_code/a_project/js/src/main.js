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

// handhelds 메뉴 클릭시 사이드 메뉴 보이기 ==================================================
// 변수 ------------------------------------------------------------------
const elMenuBtn = document.querySelector('.hand_menu');
const elCloseBtn = document.querySelector('.close_btn');
const elMenuHand = document.querySelector('#hand_nav');
const elSideMenu = document.querySelector('.side_menu');

elMenuBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  // elMenuHand.style.display = 'none';
  elSideMenu.style.display = 'block';
});

elCloseBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  elSideMenu.style.display = 'none';
  // elMenuHand.style.display = 'block';
});


// handhelds side menu language ===========================================================
// 변수 -----------------------------------------------------------------
const elSideLanLi = document.querySelector('.side_language');
const elSideLanguage = elSideLanLi.querySelectorAll('.side_language > div');


/**
 * div(각각 언어)가 li내부에 3가 있고 div에 display: none 처리가 되어있다.
 * elSideLanLi를 클릭했을때 display none이면 전부다 block으로 변경 후 
 * 모든 div에 background-color 넣기
 * 클릭 했을때 display block이면 전부 none처리
 * 내부에 div를 선택하면 선택한 div에 .on 첨부
 * 나머지는 삭제
 */




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




// 이벤트
// elAwardsBtn.addEventListener('click', (e)=>{
//   let target = (name) => e.target.classList.contains(name);

//   if(target('awards_after_btn')){ // 다음버튼 클릭시
//     console.log('next');
//   }else { // 이전 버튼 클릭시
//     console.log('prev');
//   }
// });

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
