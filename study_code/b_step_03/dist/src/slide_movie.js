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
const elSlideLi = elSlideWrap.querySelectorAll('li');
// const elSlideArr = [].slice.call(elSlideLi);
const elSlideArr = [...elSlideLi];
elSlideWrap.prepend(elSlideArr.at(-1)); // 마지막 li를 복제가 아닌 그대로 뜯어서 맨 앞으로 위치 변경



// // 이벤트
// elSlideBtn.addEventListener('click', (e) => {
//   let target = (name) => e.target.classList.contains(name);
//   if(target('next')){ // 'next'버튼 클릭시 수행하는 기능
//     console.log('다음버튼 클릭시');
//     // console.log( elSlideArr.at(0) ); 강제 배열화 시켜야만 at 사용 가능
    
//   }else { // 'prev'버튼 클릭시 수행하는 기능
//     console.log('이전버튼 클릭시');
//   }
// });


// ------------------------------------------------
// this
let elBtn = elViewBox.querySelector('.slide_btn');
let elNext = elViewBox.querySelector('.next');
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