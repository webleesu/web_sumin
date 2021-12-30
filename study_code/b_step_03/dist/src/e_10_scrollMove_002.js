// e_10_scrollMove_002.js

/** 브라우저에서 스크롤이 얼만큼 움직였는가에 따라 그 값을 가지고 이미지를 변경하게 처리
 * 1. img 모두 첨부 후 1장 빼고 display: none;
 * 2. 스크롤시 이동값
 */

const elViewBox = document.querySelector('#viewBox');
const elImgArea = elViewBox.querySelector('.img_area');
const COUNT_NUM = 80;
const OPTION_ON = 'on';

// 이미지 첨부 함수
const fnImgInsert = (n)=>{
  const convertStr = '00000000000000' + (n+1);
  const cutNum = convertStr.slice(-3);
  const [url, alt] = [`../multi/img/clean_machine/`, `청소기 광고`];
  const fileName = `${url}clean_${cutNum}.png`;
  const mkImg = document.createElement('img');
  if(n === 0){ mkImg.classList.add(OPTION_ON) }
  mkImg.setAttribute('src', fileName);
  mkImg.setAttribute('alt', alt);
  elImgArea.append(mkImg);
};

for(let i=0; i<COUNT_NUM; i+=1){
  fnImgInsert(i);  
}

// 기능처리 후 변수
const elImg = elImgArea.children;
const elImgArr = [...elImg]; //[].slice.call(elImg);
// --------------------------------------------------
// 이벤트
window.addEventListener('scroll',(e)=>{       // 브라우저에서 스크롤이 실행되었을때
  const targetScroll = e.currentTarget.scrollY;  // 브라우저(this)가 스크롤이 움직인 값 파악(scrollY)
  let moveScroll = parseInt(targetScroll / 20);   // 스크롤 값을 줄이기 위해 일정값을 나눠 숫자 제한
  
  // 이미지 중에서 moveScroll의 값에 해당하는 이미지 나타나고, 나머지는 사라지게 수행
  // 이미지처리 --------------------------------------------------------------------------
  // if(moveScroll >= COUNT_NUM){ moveScroll = COUNT_NUM-1; } // moveScroll 의 최대값을 COUNT_NUM을 넘기지 않도록 처리
  let scrollN = (moveScroll >= COUNT_NUM) ? COUNT_NUM -1 : moveScroll;
  console.log(scrollN);

  elImgArr.forEach((img,idx)=>{
    // img.classList.remove(OPTION_ON);  // 이미지 각각 전부 .on을 제거
    // elImgArr[moveScroll].classList.add(OPTION_ON); // moveScroll 순번의 이미지는 .on첨부
    // 정리: scrollNS값과 idx순번을 비교하여 일치하면 나타나고 불일치하면 사라지게
    (idx !== scrollN) ? img.classList.remove(OPTION_ON) : img.classList.add(OPTION_ON);
  });
  // 이미지 담는 요소 이동 수행(moveScroll이 음수로 나타나기 시작하는 시점)
  let topMove =  COUNT_NUM + 10 - moveScroll; // 이미지가 모두 처리된 시점으르 기준으로 해당 요소는 위로 이동하게
  if(topMove <= 0){
    elViewBox.style.top = (topMove*4)+'px';
  }
});



// =================================================================================================
// fnImgInsert('001'); // ''로 묶지 않고 그냥 001로 적으면 숫자로 인식해서 그냥 1로 들어감
/*
for(let i=0; i<COUNT_NUM; i+=1){
  let num = i+1;
  let convertStr = num.toString(); // 숫자를 문자열로 변환
  console.log(convertStr.padStart(3,'0')); // padStart는 문자열만 가능, padStart(자리수, '채울 문자')
  let convertStr = '0000' + (i+1);
  let cutNum = convertStr.slice(-3); // 뒤에서부터 3자리만(-3) 뽑아내기 / 그냥 3이면 앞에서부터 3자리를 가져옴
  console.log( cutNum ); 
  fnImgInsert(i); 
}
*/
