// e_02_slide_area.js

// e_02_slide_area.html 문서에 #headerBox와 #viewBox 영역 담기

// --------------------------------------------------------------
// 외부파일 불러오기 : fetch (불러올 파일명)
// 불러온 파일에서 문자 찾기 : 요소.text()
// 영역을 생성 : document.createElement()
// 생성영역 내부에 담기 : 선택자.innerHTML, 선택자.append
// --------------------------------------------------------------

// 불러올 data
const headBox = '/temp/header.html';
const viewBox = '/temp/slide_area2.html';
const scriptData = '/dist/src/e_02_slide_area-002.js';

// 선택 요소
const body = document.querySelector('body');
const elWrap = document.querySelector('#wrap');


// 생성 요소
const mkHeadBox = document.createElement('hedaer');
mkHeadBox.id = 'headBox';

const mkViewBox = document.createElement('section');
mkViewBox.id = 'viewBox';

// -----------------------------------------------------------
// 코드 삽입
const fnMakeEl = (selectEl, insertEl) => {
  selectEl.innerHTML = insertEl;
  elWrap.append(selectEl);
};

const fnScript = (codeUrl) => {
  const script = document.createElement('script');
  script.src = codeUrl;
  body.append(script);
};


// -----------------------------------------------------------
fetch(headBox)
.then( response => response.text() )
.then( (textElement) => {
  mkHeadBox.innerHTML = textElement;
  elWrap.prepend(mkHeadBox);
});

fetch(viewBox)
.then(response => response.text() )
.then(textElement => {
  fnMakeEl(mkViewBox, textElement);
  fnScript(scriptData);
});
// -----------------------------------------------------------

