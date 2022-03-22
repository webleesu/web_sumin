// component.js

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
const elSideLanguageCk = elSideLanLi.querySelector('.language_check');
const elSideLanguage = elSideLanLi.querySelectorAll('.side_language > div');

const elKorean = elSideLanguage[0];
const elEnglish = elSideLanguage[1];
const elChinese = elSideLanguage[2];

let sideClick = true;

elSideLanLi.addEventListener('click', (e) => {
  e.preventDefault();

  if(sideClick === true){
    elSideLanguageCk.style.display = 'none';
    elKorean.style.display = 'block';
    elEnglish.style.display = 'block';
    elChinese.style.display = 'block';
    sideClick = false;
  } else {
    elSideLanguageCk.style.display = 'block';
    elKorean.style.display = 'none';
    elEnglish.style.display = 'none';
    elChinese.style.display = 'none';
    sideClick = true;
  }
});

elKorean.addEventListener('click', (e)=> {
  e.preventDefault();
  elSideLanguageCk.innerText = '한국어';
});
elEnglish.addEventListener('click', (e)=> {
  e.preventDefault();
  elSideLanguageCk.innerText = 'ENGLISH';
});
elChinese.addEventListener('click', (e)=> {
  e.preventDefault();
  elSideLanguageCk.innerText = '中國語';
});

