// e_09_scrollWheel.js

// 변수
const elWrap = document.querySelector('#wrap');

const WIN_HEIGHT = window.innerHeight;
const TOTAL_HEIGHT = elWrap.clientHeight;
const MAX_SCROLL = TOTAL_HEIGHT - WIN_HEIGHT; // 전체 크기에서 처음 보이는 크기만큼 제외한 높이값
const maxLen = Math.ceil(TOTAL_HEIGHT / WIN_HEIGHT);
let scrollDelta = 0; // 휠방향
let scrollIndex = 0; // 휠 움직일때 마다 +1/-1
let PERMISSION = true;
let moveScroll = WIN_HEIGHT * scrollIndex; // 해당하는 위치만큼 이동

// 함수 ----------------------------------------------------
// 마우스 휠을 움직였을때 수치가 1씩 증가 또는 감소하게하고
// 이때 전체 길이기준 작은 수치일 경우에 일정 크기 많큼이동하게 처리
// 중복 수행을 방지하기 위해 임의변수 PERMISSION을 첨부하여 해당 기능을 제한
window.scrollTo({top: moveScroll, behavior:'smooth'});

const fnScrollMove = () => {
  if(PERMISSION){
    PERMISSION = false;
    if(scrollDelta < 0 && scrollIndex < maxLen){
      scrollIndex += 1
    }else if(scrollDelta > 0 && scrollIndex > 0){
      scrollIndex -=1
    };
    moveScroll = WIN_HEIGHT * scrollIndex;
    window.scrollTo({top: moveScroll, behavior: 'smooth'});
    console.log(scrollIndex + ' / ' + maxLen);
    setTimeout(() => {
      PERMISSION = true;
    }, 600);
  }
}

// 이벤트 --------------------------------------------------

// firefox를 제외한 브라우저의 휠값 체크 -> -120 / 120
window.addEventListener('mousewheel', e=>{
  // console.log(e.wheelDeltaY); // ie에서 인식 불가
  // console.log(e.wheelDelta);
  scrollDelta = e.wheelDelta;
  fnScrollMove();
});

// firefox에서 휠값 체크 -> -3 / 3 이를 같은 공통 값으로 처리하기 위해 -40을 곱해서 처리
window.addEventListener('DomMouseScroll', e=>{ // 파이어폭스를 위한 것
  // console.log(e.detail); // 3, -3으로만 움직임
  let deltaY = e.detail;
  // event내부에 wheelDelta기능이 없다면 (firefox기반)
  if(e.wheelDelta === undefined){ deltaY *= -40; }
  scrollDelta = deltaY;
  fnScrollMove();
});

