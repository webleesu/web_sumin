// e_09_scrollMove.js

const headBox = document.querySelector('#headBox');
const OPTION_FIX = 'fix';

const offsetCheck = headBox.offsetTop;
console.log(offsetCheck);

window.addEventListener('scroll', e=> {
  const target = e.currentTarget.scrollY;
  const offsetCheck2 = headBox.offsetTop;
  console.log('scroll : ' + target, 'offset : '+offsetCheck2);
  const headClass = headBox.classList;

  // 스크롤값이 현재 offset값보다 커지면 .fix를 추가
  if(target >= offsetCheck){ 
    headClass.add(OPTION_FIX);
  } else {
    headClass.remove(OPTION_FIX);
  }
});