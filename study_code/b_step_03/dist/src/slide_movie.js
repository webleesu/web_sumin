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



// 이벤트
elSlideBtn.addEventListener('click', (e) => {
  let target = (name) => e.target.classList.contains(name);
  if(target('next')){ // 'next'버튼 클릭시 수행하는 기능
    console.log('다음버튼 클릭시');
    // console.log( elSlideArr.at(0) ); 강제 배열화 시켜야만 at 사용 가능
    
  }else { // 'prev'버튼 클릭시 수행하는 기능
    console.log('이전버튼 클릭시');
  }
});


// ------------------------------------------------
