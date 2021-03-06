// slide_movie.js

// ==================================
/** 시나리오 1
 * 1. 다음버튼 클릭 시 첫 요소가 마지막으로 이동
 */
// ==================================

// 변수
const elViewBox = document.querySelector('#viewBox');
const elSlideBtn = elViewBox.querySelector('.slide_btn');
const elSlideWrap = elViewBox.querySelector('.view_wrap');
const elModal = elViewBox.querySelector('.modal_area');
const elMovie = elModal.querySelector('.movie');
const elModalClose = elModal.querySelector('.modal_close > button');

let elSlideLi = elSlideWrap.querySelectorAll('li');

let elSlide = [...elSlideLi];
let PERMISSION = true;
elViewBox.style.overflowX = 'hidden';
let dbVideoData = [];
let videoCode = (fileName, type = 'mp4') => {
        return `<video controls autoPlay muted preload>
                  <source src="${fileName}" type="video/${type}" /> 
                </video>`};
// -----------------------------------------------------------------

// elSlide.forEach( (el,idx) => {
//   el.setAttribute('data-num', idx);
// })

const path = "../data/video_modal.json";
fetch(path)
.then(response => response.json() )
.then( (data)=>{
  dbVideoData = [...data];
  elSlide.forEach( (el,idx) => {
    el.setAttribute('data-num', dbVideoData[idx].id);
  });
});

// -----------------------------------------------------------------
// const elSlideArr = [].slice.call(elSlideLi);
// const elSlideArr = [...elSlideLi];
// elSlideWrap.prepend(elSlideArr.at(-1)); // 마지막 li를 복제가 아닌 그대로 뜯어서 맨 앞으로 위치 변경

/* 줄이기전 코드 ----------------------------------------------------------------------
const fnSlideMove = () => {
  let elSlide = [...elSlideLi]; // 1,2,3,4,5
  elSlideWrap.prepend( elSlide.at(-1) ); // 5,1,2,3,4 - 실질적 가지고 있는 배열 : 1,2,3,4,5
  elSlideLi = elSlideWrap.querySelectorAll('li'); // 순서 바뀐것을 컴퓨터가 모르기에 다시 재선택
};

const fnSlideMove2 = () => {
  let elSlide = [...elSlideLi];
  elSlideWrap.append( elSlide.at(0) );
  elSlideLi = elSlideWrap.querySelectorAll('li'); // 순서 바뀐것을 컴퓨터가 모르기에 다시 재선택
};

const fnSlideMove = (permission) => {
  let elSlide = [...elSlideLi];
  if(permission){
    elSlideWrap.prepend( elSlide.at(-1) ); 
  } else {
    elSlideWrap.append( elSlide.at(0) );
  }
  elSlideLi = elSlideWrap.querySelectorAll('li');
};


// 이벤트
elSlideBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let target = e.target.classList.contains('next');
  fnSlideMove( !target );

  // if(target('next')){ // 'next'버튼 클릭시 수행하는 기능
  //   // console.log('다음버튼 클릭시');
  //   // console.log( elSlideArr.at(0) ); 강제 배열화 시켜야만 at 사용 가능
  //   fnSlideMove();
  // }else { // 'prev'버튼 클릭시 수행하는 기능
  //   // console.log('이전버튼 클릭시');
  //   fnSlideMove(true);
  // }
});
*/
// 줄인 후 코드 --------------------------------------------------------------------------
const fnSlideMove = (e) => {
  e.preventDefault();
  if(PERMISSION) {
    PERMISSION = false;
    let target = e.target.classList.contains('next');
    let elSlide = [...elSlideLi];
    (target) ? elSlideWrap.append( elSlide.at(0) ) : elSlideWrap.prepend( elSlide.at(-1) );

    elSlideLi = elSlideWrap.querySelectorAll('li');
    setTimeout(() => { PERMISSION = true}, 500);
  }
};


elSlideWrap.prepend( elSlide.at(-1) );
elSlideWrap.prepend( elSlide.at(-2) );
elSlideLi = elSlideWrap.querySelectorAll('li');

// 이벤트
elSlideBtn.addEventListener('click', fnSlideMove);

elSlideWrap.addEventListener('click', (e)=>{
  e.preventDefault();
  let el = e.target;
  let selectData;
  // tagName 이 대문자로 나오기 때문에 toLowerCase로 소문자로 바꿔줌
  if(el.tagName.toLowerCase() === 'button'){
    let num = el.parentNode.getAttribute('data-num'); // 임의로 설정한 data-num 을 가져오기 위함 (getAttribute)
    // elModal.classList.add('on');
    // elModalClose.focus(); // 강제 포커스 우선 처리
    // console.log(num);

    selectData = dbVideoData.filter((data)=>{
      return data.id === parseInt(num);
    });
    // console.log(selectData[0].file);
    let src = `../multi/video/${selectData[0].file}.mp4`;
    // videoSrc.src = '../multi/video/' + selectData[0].file + '.mp4';
    // videoCode(videoSrc.src);
    
    elMovie.innerHTML = videoCode(src)
    elModal.classList.add('on');
    elModalClose.focus();
  }
});

elModalClose.addEventListener('click', (e)=>{
  e.preventDefault();
  elModal.classList.remove('on');
  elMovie.children[0].remove();
});

// ------------------------------------------------
// this

// let elBtn = elViewBox.querySelector('.slide_btn');
// let elNext = elViewBox.querySelector('.next');

/*
elBtn.addEventListener('click', (e)=>{
  // function(){} 함수일 경우 이벤트 주체, ()=>{} 함수에서는 전체문맥
  // 화살표함수 : 생성자함수를 만들 수 없는 함수
  console.log( this );           // Window
  console.log(e.currentTarget);  // <div class="slide_btn">…</div>
  console.log(e.target);         // <button type="button" class="next">다음내용</button>
});
*/

// 버블링 : 이벤트 발생부터 상위로 개념
/*
elBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log('버튼의 부모에서 명령');
});

elNext.addEventListener('click', function(e){
  e.preventDefault();
  e.stopPropagation(); // 버블링현상 막기 이 기능이 없으면 버튼(elNext)을 클릭했는데 부모(elBtn)도 클릭이됨
  console.log('버튼에서 명령');
});
*/

// 캡쳐링 : 이벤트 발생요인이 되는 곳까지 상위에서부터 찾아 내려가는 것
/*
for(let elem of document.querySelectorAll('*')) {
  elem.addEventListener('click', e=> console.log(`캡쳐링 : ${elem.tagName}`), true);
  elem.addEventListener('click', e=> console.log(`버블링 : ${elem.tagName}`));
}
*/
// =====================================================================================
// li를 클릭시 해당하는 내용에 맞는 영상을 모달창에 띄워 처리 
