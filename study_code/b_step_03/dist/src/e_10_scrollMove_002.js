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
window.addEventListener('scroll',(e)=>{
  const moveScroll = parseInt(e.currentTarget.scrollY / 50);
  console.log(moveScroll);
  elImgArr.forEach((img,idx)=>{
    img.classList.remove(OPTION_ON);
    elImgArr[moveScroll].classList.add(OPTION_ON);
  });
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
