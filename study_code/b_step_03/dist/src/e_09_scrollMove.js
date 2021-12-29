// e_09_scrollMove.js

const elHeadBox = document.querySelector('#headBox');
const elScrollToBtn = document.querySelector('.scroll_down_btn')

const OPTION_FIX = 'fix';

const offsetCheck = elHeadBox.offsetTop;
// console.log(offsetCheck);

window.addEventListener('scroll', e=> {
  const target = e.currentTarget.scrollY;
  const offsetCheck2 = elHeadBox.offsetTop;
  // console.log('scroll : ' + target, 'offset : '+offsetCheck2);
  const headClass = elHeadBox.classList;
  // console.log(scrollTop);

  // 스크롤값이 현재 offset값보다 커지면 .fix를 추가
  if(target >= offsetCheck){ 
    headClass.add(OPTION_FIX);
  } else {
    headClass.remove(OPTION_FIX);
  }
});

elScrollToBtn.addEventListener('click', e=>{
  // window.scrollTo(0, 500); // 지정된 스크롤 위치로 이동
  window.scrollBy({top:500, behavior: 'smooth'}); // 현재 위치를 기준으로 지정된 스크롤만큼 추가로 누를때 마다 이동
  // window.scroll({top:500, behavior: 'smooth'}); // scrollTo와 같이 지정된 스크롤 위치로 이동
});